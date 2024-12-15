import express from "express";
import { sharedRouter } from "../routes";
import compression from "compression";

const app = express();

app.use(compression());

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/", sharedRouter);

export default app;
