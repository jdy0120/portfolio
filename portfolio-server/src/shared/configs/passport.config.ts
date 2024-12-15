import {
  Strategy as LocalStrategy,
  IStrategyOptions,
  VerifyFunction,
} from "passport-local";
import {
  Strategy as JwtStrategy,
  ExtractJwt,
  StrategyOptions,
  VerifyCallback,
} from "passport-jwt";

import {
  ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET,
  STATUS_CODES,
} from "../constants";
import { HttpError } from "../errors/http-error";
import { TokenError } from "../errors/token-error";
import { User } from "../models/main/user.model";
import { compareHash } from "../utils/crypto";

const localStrategyOptions: IStrategyOptions = {
  usernameField: "userId",
  passwordField: "password",
  session: false,
};
const accessJwtStrategyOptions: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: ACCESS_TOKEN_SECRET,
  ignoreExpiration: true,
};
const refreshJwtStrategyOptions: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: REFRESH_TOKEN_SECRET,
  ignoreExpiration: true,
};

const verifyLocal: VerifyFunction = async (
  userId,
  password,
  done
) => {
  try {
    const user = await User.readOneByUserId(userId);

    if (!user)
      return done(new HttpError(STATUS_CODES.NOT_FOUND), false);

    const isMatch = compareHash(password, user.password);

    if (!isMatch)
      return done(new HttpError(STATUS_CODES.BAD_REQUEST), false);

    return done(null, user);
  } catch (err) {
    console.error(err);
    done(err, false);
  }
};

const verifyAccessJwt: VerifyCallback = async (payload, done) => {
  try {
    const now = Date.now();
    const { id, issuedAt, expiredIn } = payload;

    if (now > issuedAt + expiredIn)
      return done(
        new TokenError(STATUS_CODES.FORBIDDEN, true, false),
        false
      );

    const user = await User.readOne(id);

    if (!user)
      return done(new HttpError(STATUS_CODES.NOT_FOUND), false);

    return done(null, user);
  } catch (err) {
    console.error(err);
    done(err, false);
  }
};

const verifyRefreshJwt: VerifyCallback = async (payload, done) => {
  try {
    const now = Date.now();
    const { id, issuedAt, expiredIn } = payload;

    if (now > issuedAt + expiredIn)
      return done(
        new TokenError(STATUS_CODES.FORBIDDEN, true, true),
        false
      );

    const user = await User.readOne(id);

    if (!user)
      return done(new HttpError(STATUS_CODES.NOT_FOUND), false);

    return done(null, user);
  } catch (err) {
    console.error(err);
    done(err, false);
  }
};

export const localStrategy = new LocalStrategy(
  localStrategyOptions,
  verifyLocal
);
export const accessJwtStrategy = new JwtStrategy(
  accessJwtStrategyOptions,
  verifyAccessJwt
);
export const refreshJwtStrategy = new JwtStrategy(
  refreshJwtStrategyOptions,
  verifyRefreshJwt
);
