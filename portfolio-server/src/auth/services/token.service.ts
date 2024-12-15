import { Request } from "express";

import {
  generateAccessToken,
  generateRefreshToken,
  generateSignUpToken,
} from "../../shared/utils";

const issueJSONWebTokens = (req: Request) => {
  const id = req.user?.id;
  const issuedAt = Date.now();
  const accessToken = generateAccessToken({ id, issuedAt });
  const refreshToken = generateRefreshToken({ id, issuedAt });

  return { accessToken, refreshToken };
};

const issueSignUpToken = (id: number) => {
  const issuedAt = Date.now();
  const signUpToken = generateSignUpToken({ id, issuedAt });

  return { signUpToken };
};

export default {
  issueJSONWebTokens,
  issueSignUpToken,
};
