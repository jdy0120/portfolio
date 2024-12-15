import { Router } from "express";

import { tryCatchAsync } from "../../../shared/middlewares/try-catch.middleware";
import categoryController from "../../controllers/category.controller";

export const categoryRouter = Router();

categoryRouter
  .route("/categories")
  .get(tryCatchAsync(categoryController.readAll))
  .post(tryCatchAsync(categoryController.write));
