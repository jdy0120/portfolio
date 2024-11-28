import express from "express";
import * as routes from "../routes";

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/", routes.v1.test);

export default app;
