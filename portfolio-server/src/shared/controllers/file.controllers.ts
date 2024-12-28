import { Request } from "express";

import fileService from "../services/file.service";
import { BasicResponse } from "../types";
import { AttachmentTemp } from "../models/main/attachment.model";
import { STATUS_CODES } from "../constants";
import { getResponsePhrase } from "../utils/http";

const uploadsTemp = async (req: Request) => {
  const data = await fileService.uploadsTemp(req);

  req.statusCode = STATUS_CODES.CREATED;

  return <BasicResponse<AttachmentTemp[]>>{
    result: true,
    message: getResponsePhrase(STATUS_CODES.CREATED),
    data,
  };
};

export { uploadsTemp };
