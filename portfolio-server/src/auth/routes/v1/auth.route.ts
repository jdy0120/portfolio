import passport from "passport";
import { Router } from "express";
import { tryCatchAsync } from "../../../shared/middlewares/try-catch.middleware";
import authController from "../../controllers/auth.controller";
import { validateDto } from "../../../shared/middlewares/validate-dto.middleware";
import { signUpDto, signInDto } from "../../dtos/auth.dto";

export const authRouter = Router();

authRouter
  .route("/sign-up")
  .post(validateDto(signUpDto), tryCatchAsync(authController.signUp));

authRouter
  .route("/sign-in")
  .post(
    validateDto(signInDto),
    passport.authenticate("login", { session: false }),
    tryCatchAsync(authController.signIn)
  );
