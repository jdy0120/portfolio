import { Router } from "express";
import * as fileController from "../../controllers";
import { tryCatchAsync } from "../../middlewares/try-catch.middleware";

export const fileRouter = Router();

fileRouter
  .route("/common/v1/uploads/temp")
  .post(tryCatchAsync(fileController.uploadsTemp));

fileRouter
  .route("/common/v1/uploads/temp/useOriginalFilename")
  .post(tryCatchAsync(fileController.uploadsTempUseOriginalFilename));
