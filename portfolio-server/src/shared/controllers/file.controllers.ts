import { Request } from "express";

import fileService from "../services/file.service";
import { BaseResponse } from "../types";
import { AttachmentTempAttributes } from "../models/v1/attachment.model";
import { STATUS_CODES } from "../constants";
import { getResponsePhrase } from "../utils/http";

export const upload = async (req: Request) => {
  const data = await fileService.upload(req);

  req.statusCode = STATUS_CODES.OK;

  return <BaseResponse<AttachmentTempAttributes>>{
    result: true,
    message: getResponsePhrase(STATUS_CODES.CREATED),
    data,
  };
};
