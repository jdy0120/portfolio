import { NextFunction, Router } from "express";
import blogPostController from "../../controllers/blogpost.controller";
import { tryCatchAsync } from "../../../shared/middlewares/try-catch.middleware";
import { BaseResponse } from "../../../shared/types/response";
import { BlogPost } from "../../models";

export const blogPostRouter = Router();

blogPostRouter
  .route("/blogpost")
  .get(tryCatchAsync(blogPostController.readAll))
  .post(tryCatchAsync(blogPostController.write));
