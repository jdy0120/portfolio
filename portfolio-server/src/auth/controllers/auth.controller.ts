import { Request } from "express";
import authService from "../services/auth.service";
import { STATUS_CODES } from "../../shared/constants";
import { BaseResponse } from "../../shared/types";
import { User } from "../../shared/models";
import { getResponsePhrase } from "../../shared/utils";
import tokenService from "../services/token.service";

const signUp = async (req: Request) => {
  const data = await authService.signUp(req);

  req.statusCode = STATUS_CODES.CREATED;

  return <BaseResponse<User>>{
    result: true,
    message: getResponsePhrase(STATUS_CODES.CREATED),
    data,
  };
};

const signIn = async (req: Request) => {
  // const data = await authService.signIn(req);
  const data = tokenService.issueJSONWebTokens(req);

  req.statusCode = STATUS_CODES.OK;

  return <
    BaseResponse<{ accessToken: string; refreshToken: string }>
  >{
    result: true,
    message: getResponsePhrase(STATUS_CODES.OK),
    data,
  };
};

export default {
  signUp,
  signIn,
};
