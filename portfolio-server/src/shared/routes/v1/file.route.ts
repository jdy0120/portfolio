import { Router } from "express";
import * as fileController from "../../controllers";
import { tryCatchAsync } from "../../middlewares/try-catch.middleware";

export const fileRouter = Router();

fileRouter
  .route("/common/v1/uploads")
  .post(tryCatchAsync(fileController.upload));
