import formidable from "formidable";
import fs from "fs";
import { parse as parseMime } from "file-type-mime";

import { Domain } from "../types";
import { path } from "app-root-path";
import { randomBytes } from "crypto";
import { Request } from "express";
import { join } from "path";
import { connectAzure } from "../configs/azure.config";
import { PutObjectCommand, PutObjectCommandInput } from "@aws-sdk/client-s3";
import { s3 } from "../configs/aws.config";

export const resourcePath = join(path, "resources");
export const tempPath = () => join(resourcePath, "temps");
export const uploadPath = () => join(resourcePath, "uploads");
export const storagePath = () => join("resources", "uploads");

export const DEFAULT_MAX_FILES = 10;
export const DEFAULT_MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

// this for server, it may private, no need to open to client.
export const getTempPath = () => join(tempPath());
export const getUploadPath = (domain: Domain) => join(uploadPath(), domain);
export const getStoragePath = (domain: Domain) => join(storagePath(), domain);

// this for client, client may request file by this path.
export const getStaticTempPath = () => join("resources", "temps");
export const getStaticUploadPath = (domain: Domain) => join("resources", "uploads", domain);

export const makeDirectory = (path: string) => {
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path, { recursive: true });
  }
};

const filename = (name: string, extension: string, isUseOriginalFilename?: boolean) => {
  const today = Date.now();
  const random = randomBytes(16).toString("hex");

  return isUseOriginalFilename ? `${name}${extension}` : `${today}_${random}${extension}`;
};

const parseFormData = (
  req: Request,
): Promise<{
  field: formidable.Fields;
  files: { files: formidable.File[] };
}> => {
  return new Promise((resolve, reject) => {
    const form = formidable({
      multiples: true,
    });

    form.parse(req, (err, fields, files) => {
      if (err) {
        return reject(err);
      }
      return resolve({
        field: fields,
        files: files as unknown as { files: formidable.File[] },
      });
    });
  });
};

export const uploadsTemp = (
  req: Request,
  isUseOriginalFilename?: boolean,
  options?: formidable.Options,
): Promise<{
  fields: formidable.Fields;
  files: {
    files: formidable.File[];
    isUseOriginalFilename?: boolean;
  };
}> => {
  return new Promise((resolve, reject) => {
    const form = formidable({
      multiples: true,
      keepExtensions: true,
      allowEmptyFiles: false,
      encoding: "utf-8",
      maxFiles: DEFAULT_MAX_FILES,
      maxFileSize: DEFAULT_MAX_FILE_SIZE,
      uploadDir: getTempPath(),
      filename: (name, ext, _, __) => {
        return filename(name, ext, isUseOriginalFilename);
      },
      ...options,
    });

    form.parse(req, (err, fields, files) => {
      if (err) {
        return reject(err);
      }

      if (!Array.isArray(files["files"])) {
        files["files"] = [files["files"]!];
      }

      return resolve({
        fields,
        files: files as unknown as { files: formidable.File[] },
      });
    });
  });
};

export const moveFiles = async (domain: Domain, from: string[], to: string) => {
  // const directoryPath = join(getUploadPath(domain), to);

  const directoryPath = join(getStoragePath(domain), to);

  makeDirectory(directoryPath);

  for (const oldPath of from) {
    const filename = oldPath.split("/temps/")[1];

    if (!filename) {
      console.error("filename not found");
      throw new Error();
    }

    const newPath = join(directoryPath, filename);

    await fs.promises.rename(join(path, oldPath), newPath);

    await uploadToS3(newPath);
  }
};

export const removeFiles = async (removePath: string) => {
  const targetPath = join(path, removePath);
  if (fs.existsSync(targetPath)) {
    await fs.promises.unlink(targetPath);
  }
};

export const uploadToAzure = async (newPath: string, oldPath: string) => {
  try {
    const blobClient = connectAzure().getBlobClient(`${newPath}`);
    const blockBlobClient = blobClient.getBlockBlobClient();

    await blockBlobClient.uploadFile(oldPath);
  } catch (error) {
    console.error("Error uploading to Azure:", error);
  }
};

const uploadToS3 = async (newPath: string) => {
  try {
    const buffer = await fs.promises.readFile(newPath);
    const mime = parseMime(buffer);
    const s3Params: PutObjectCommandInput = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: `${newPath}`,
      Body: buffer,
      ContentType: mime?.mime || "application/octet-stream",
    };

    const command = new PutObjectCommand(s3Params);
    await s3.send(command);
  } catch (error) {
    console.error("Error uploading to S3:", error);
  }
};

export { filename, parseFormData };
