import { Router } from "express";

import tokenController from "../../controllers/token.controller";
import { validateJwt } from "../../../shared/middlewares/validate-jwt.middleware";
import { tryCatchAsync } from "../../../shared/middlewares/try-catch.middleware";

export const tokenRouter = Router();

tokenRouter.post(
  "/refresh-token",
  validateJwt("validate-refresh-jwt"),
  tryCatchAsync(tokenController.validateRefreshToken)
);
