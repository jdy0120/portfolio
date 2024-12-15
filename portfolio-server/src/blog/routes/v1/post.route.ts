import { Router } from "express";
import { tryCatchAsync } from "../../../shared/middlewares/try-catch.middleware";
import postController from "../../controllers/post.controller";

export const postRouter = Router();

postRouter
  .route("/posts")
  .get(tryCatchAsync(postController.readAll))
  .post(tryCatchAsync(postController.write));

postRouter
  .route("/posts/:id")
  .get(tryCatchAsync(postController.readOne))
  .put(tryCatchAsync(postController.modify))
  .delete(tryCatchAsync(postController.erase));
