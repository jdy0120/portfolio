import { Router, Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";

import exampleController from "../../controllers/example.controller";
import { tryCatchAsync } from "../../../shared/middlewares/try-catch.middleware";

export const router = Router();

// GET - users
router.route("/users").get(tryCatchAsync(exampleController.readAll));

router
  .route("/user/:id")
  .get(tryCatchAsync(exampleController.readOne))
  .delete(tryCatchAsync(exampleController.erase));

// POST - users
router.post("/user", async (req: Request, res: Response) => {
  const data = await exampleController.write(req);
  // TO DO
  res.status(201).json({
    user: {
      name: data.name,
      address: data.address,
    },
  });
});
