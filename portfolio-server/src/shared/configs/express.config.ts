import express from "express";
import { sharedRouter } from "../routes";
import compression from "compression";
import passport from "passport";
import cors from "cors";
import {
  accessJwtStrategy,
  localStrategy,
  refreshJwtStrategy,
} from "./passport.config";
import {
  errorConverter,
  errorHandler,
} from "../middlewares/error.middleware";
import { resourcePath } from "../utils";

const app = express();

const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(",") || [];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);
app.use(compression());

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(passport.initialize());
passport.use("login", localStrategy);
passport.use("validate-access-jwt", accessJwtStrategy);
passport.use("validate-refresh-jwt", refreshJwtStrategy);

// Routes
app.use("/", sharedRouter);
app.use("/resources", express.static(resourcePath));

app.use(errorConverter);
app.use(errorHandler);

export default app;
