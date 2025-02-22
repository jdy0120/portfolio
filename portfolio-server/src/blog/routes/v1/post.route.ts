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
  .patch(tryCatchAsync(postController.changeStatus))
  .delete(tryCatchAsync(postController.erase));

postRouter
  .route("/posts/slug/:slug")
  .get(tryCatchAsync(postController.readSlug));
