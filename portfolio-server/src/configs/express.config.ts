import express from "express";

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/", (req, res) => {
  res.status(200).json({ message: "Hello World" });
});

export default app;
