import { Router } from "express";
import * as fileController from "../../controllers";

export const fileRouter = Router();

fileRouter.route("/common/v1/uploads").post(fileController.upload);
