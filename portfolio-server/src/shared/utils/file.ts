import formidable from "formidable";
import fs from "fs";

import { Domain } from "../types";
import { path } from "app-root-path";
import { randomBytes } from "crypto";
import { Request } from "express";
import { join } from "path";

export const resourcePath = join(path, "resources");
export const tempPath = () => join(resourcePath, "temps");
export const uploadPath = () => join(resourcePath, "uploads");

export const DEFAULT_MAX_FILES = 10;
export const DEFAULT_MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

// this for server, it may private, no need to open to client.
export const getTempPath = () => join(tempPath());
export const getUploadPath = (domain: Domain) =>
  join(uploadPath(), domain);

// this for client, client may request file by this path.
export const getStaticTempPath = () => join("resources", "temps");
export const getStaticUploadPath = (domain: Domain) =>
  join("resources", "uploads", domain);

export const makeDirectory = (path: string) => {
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path, { recursive: true });
  }
};

const filename = (_name: string, extension: string) => {
  const today = Date.now();
  const random = randomBytes(16).toString("hex");

  return `${today}_${random}${extension}`;
};

const parseFormData = (
  req: Request
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
  options?: formidable.Options
): Promise<{
  fields: formidable.Fields;
  files: { files: formidable.File[] };
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
      filename,
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

export const moveFiles = async (
  domain: Domain,
  from: string[],
  to: string
) => {
  const directoryPath = join(getUploadPath(domain), to);

  makeDirectory(directoryPath);

  for (const oldPath of from) {
    const filename = oldPath.split("/temps/")[1];

    if (!filename) {
      console.error("filename not found");
      throw new Error();
    }

    const newPath = join(directoryPath, filename);

    await fs.promises.rename(join(path, oldPath), newPath);
  }
};

export const removeFiles = async (removePath: string) => {
  const targetPath = join(path, removePath);
  if (fs.existsSync(targetPath)) {
    await fs.promises.unlink(targetPath);
  }
};

export { filename, parseFormData };
