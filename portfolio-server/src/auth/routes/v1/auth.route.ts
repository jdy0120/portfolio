import passport from "passport";
import { Router } from "express";
import { tryCatchAsync } from "../../../shared/middlewares/try-catch.middleware";
import authController from "../../controllers/auth.controller";

export const authRouter = Router();

authRouter
  .route("/sign-up")
  .post(tryCatchAsync(authController.signUp));

authRouter
  .route("/sign-in")
  .post(
    passport.authenticate("login", { session: false }),
    tryCatchAsync(authController.signIn)
  );
