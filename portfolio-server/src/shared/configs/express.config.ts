import express from "express";
import { sharedRouter } from "../routes";

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/", sharedRouter);

export default app;
