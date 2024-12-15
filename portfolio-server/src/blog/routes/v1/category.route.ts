import { Router } from "express";

import { tryCatchAsync } from "../../../shared/middlewares/try-catch.middleware";
export const categoryRouter = Router();

categoryRouter.route("/categories").get();
