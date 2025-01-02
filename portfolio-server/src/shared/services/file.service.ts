import { Request } from "express";

import { seq } from "../../shared/configs/sequelize.config";
import {
  AttachmentTemp,
  AttachmentTempCreationAttributes,
} from "../models/main/attachment.model";

import * as UTILS from "../utils/file";
import { Domain } from "../types";
import { Transaction } from "sequelize";

const uploadsTemp = async (
  req: Request,
  options?: { isUseOriginalFilename?: boolean }
) => {
  const { user } = req;
  const { files } = await UTILS.uploadsTemp(
    req,
    options?.isUseOriginalFilename
  );
  const transaction = await seq.transaction();

  try {
    const attachmentTempList: AttachmentTempCreationAttributes[] = [];

    for (const file of files["files"]) {
      const filename = file.newFilename;
      const path = `${UTILS.getStaticTempPath()}/${filename}`;

      attachmentTempList.push({
        filename,
        originalFilename: file.originalFilename as string,
        mimetype: file.mimetype as string,
        size: file.size,
        path,
        userId: user.id,
      });
    }

    const attachmentTemps = await AttachmentTemp.bulkWrite(
      attachmentTempList,
      { transaction }
    );

    await transaction.commit();

    return attachmentTemps;
  } catch (err) {
    await transaction.rollback();
    throw err;
  }
};

interface MoveFileOptions {
  attachmentTempList: { id: number }[];
  domain: Domain;
  newPath: string;
  transaction?: Transaction;
  beforeMove?: (attachmentTemps: AttachmentTemp[]) => Promise<void>;
}

const moveTempsToUploads = async (options: MoveFileOptions) => {
  const {
    attachmentTempList,
    domain,
    newPath,
    transaction,
    beforeMove,
  } = options;
  const attachmentTempsIds = attachmentTempList.map(
    (attachment) => attachment.id
  );
  const attachmentTemps = await AttachmentTemp.readAll({
    where: { id: attachmentTempsIds },
    raw: true,
    transaction,
  });

  if (beforeMove) {
    await beforeMove(attachmentTemps);
  }

  await UTILS.moveFiles(
    domain,
    attachmentTemps.map((attachmentTemp) => attachmentTemp.path),
    newPath
  );

  await eraseTemps({ attachmentTemps, transaction });
};

interface EraseTempsOptions {
  attachmentTemps: AttachmentTemp[];
  transaction?: Transaction;
}

const eraseTemps = async (options: EraseTempsOptions) => {
  const { attachmentTemps, transaction } = options;

  for (const attachmentTemp of attachmentTemps) {
    await UTILS.removeFiles(attachmentTemp.path);
    await AttachmentTemp.erase(attachmentTemp.id, {
      force: true,
      transaction,
    });
  }
};

export default { uploadsTemp, moveTempsToUploads };
