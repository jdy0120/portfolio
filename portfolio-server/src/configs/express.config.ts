import express from "express";
import blogRouter from "../blog/routes";

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/", blogRouter);

export default app;
