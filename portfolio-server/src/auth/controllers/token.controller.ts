import { Request } from "express";

import tokenService from "../services/token.service";
import { STATUS_CODES } from "../../shared/constants";
import { BaseResponse } from "../../shared/types";
import { getResponsePhrase } from "../../shared/utils";

const validateRefreshToken = async (req: Request) => {
  const data = tokenService.issueJSONWebTokens(req);

  req.statusCode = STATUS_CODES.CREATED;

  return <BaseResponse>{
    result: true,
    message: getResponsePhrase(STATUS_CODES.CREATED),
    data,
  };
};

export default {
  validateRefreshToken,
};
