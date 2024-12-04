import express from "express";
import exampleRouter from "../example/routes";
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", exampleRouter);

export default app;
