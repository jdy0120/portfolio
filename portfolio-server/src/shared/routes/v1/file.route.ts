import { Router } from "express";

export const fileRouter = Router();

fileRouter.route("/common/v1/uploads").post();
