import { Router } from "express";
import * as sharedV1Router from "./v1/index";
import blogRouter from "../../blog/routes";

const { APP_NAME } = process.env;
const router = Router();

router.use(`/api/${APP_NAME}`, [
  ...Object.entries(sharedV1Router).map(([_, value]) => value),
  blogRouter,
]);

export { router as sharedRouter };
