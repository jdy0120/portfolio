import passport from "passport";
import { NextFunction, Request, Response } from "express";

export const validateJwt =
  (strategy: "validate-access-jwt" | "validate-refresh-jwt") =>
  (req: Request, res: Response, next: NextFunction) =>
    passport.authenticate(
      strategy,
      { session: false },
      (
        err: any,
        user?: Express.User | false | null,
        info?: object | string | Array<string | undefined>,
        _status?: number | Array<number | undefined>
      ) => {
        if (err) {
          console.error("Authentication error:", err);
          return next(err);
        }
        if (info) {
          console.warn("Authentication info:", info);
          if (info instanceof Error) return next(info);
        }
        if (user) {
          console.log("Authenticated user:", user);
          req.user = user;
        }

        return next();
      }
    )(req, res, next);
