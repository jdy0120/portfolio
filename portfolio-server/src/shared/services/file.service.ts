import { Request, Response } from "express";

import { parseFormData } from "../utils/file";
import { seq } from "../../shared/configs/sequelize.config";
import {
  AttachmentTemp,
  AttachmentTempCreationAttributes,
} from "../models/v1/attachment.model";

const upload = async (req: Request) => {
  const { files } = await parseFormData(req);
  const transaction = await seq.transaction();

  try {
    const attachmentTempList: AttachmentTempCreationAttributes[] = [];

    for (const file of files["files"]) {
      const filename = file.newFilename;
      const path = `./uploads/${filename}`;

      attachmentTempList.push({
        filename,
        originalFilename: file.originalFilename as string,
        path,
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
