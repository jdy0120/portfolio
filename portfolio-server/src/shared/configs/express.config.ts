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

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));
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

export default app;
