import { Request, Response, NextFunction, Router } from "express";

import * as sharedV1Router from "./v1/index";
import blogRouter from "../../blog/routes";
import authRouter from "../../auth/routes";
import { validateJwt } from "../middlewares/validate-jwt.middleware";

const { APP_NAME } = process.env;
const router = Router();

const jwtExcludedPaths = [
  {
    method: "GET",
    path: "/v1/posts",
  },
  {
    method: "GET",
    path: "/v1/categories",
  },
  {
    method: "POST",
    path: "/auth/sign-in",
  },
  {
    method: "POST",
    path: "/auth/sign-up",
  },
];

const unless =
  (
    paths: typeof jwtExcludedPaths,
    middleware: (
      req: Request,
      res: Response,
      next: NextFunction
    ) => any
  ) =>
  (req: Request, res: Response, next: NextFunction) => {
    for (const e of paths)
      if (
        req.method.toUpperCase() === e.method &&
        req.path.includes(e.path)
      )
        return next();
    return middleware(req, res, next);
  };

router.use(
  `/api/${APP_NAME}`,
  unless(jwtExcludedPaths, validateJwt("validate-access-jwt")),
  [
    ...Object.entries(sharedV1Router).map(([_, value]) => value),
    blogRouter,
    authRouter,
  ]
);

export { router as sharedRouter };
