import { Request } from "express";

import { parseFormData } from "../utils/file";
import { seq } from "../../shared/configs/sequelize.config";
import { v4 as uuidv4 } from "uuid";
import s3 from "../../shared/configs/aws.config";
import fs from "fs/promises";
import {
  AttachmentTemp,
  AttachmentTempCreationAttributes,
} from "../models/v1/attachment.model";
import {
  PutObjectCommand,
  PutObjectCommandInput,
} from "@aws-sdk/client-s3";

const upload = async (req: Request) => {
  const { files } = await parseFormData(req);
  const transaction = await seq.transaction();

  try {
    const attachmentTempList: AttachmentTempCreationAttributes[] = [];

    for (const file of files["files"]) {
      const filename = file.newFilename;
      const extension = file.mimetype?.split("/")[1];

      const uniqueFilename = `${uuidv4()}-${filename}.${extension}`;

      const buffer = await fs.readFile(file.filepath);

      const s3Params: PutObjectCommandInput = {
        Bucket: process.env.AWS_S3_BUCKET_NAME || "",
        Key: `assets/images/${uniqueFilename}`,
        Body: buffer,
        ContentType: file.mimetype as string,
      };

      const command = new PutObjectCommand(s3Params);
      await s3.send(command);

      attachmentTempList.push({
        filename,
        originalFilename: file.originalFilename as string,
        path: `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/assets/images/${uniqueFilename}`,
        mimetype: file.mimetype as string,
        size: file.size,
      });
    }

    const attachmentTemp = await AttachmentTemp.bulkCreate(
      attachmentTempList,
      { transaction }
    );

    await transaction.commit();

    return attachmentTemp;
  } catch (error) {
    await transaction.rollback();
    throw error;
  }
};

export default { upload };
