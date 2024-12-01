import { Router } from "express";

const priorityPostRouter = Router();

priorityPostRouter
  .route("/prioritypost")
  .get(readAll)
  .post(createOne);

export default priorityPostRouter;
