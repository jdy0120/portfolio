import { Router } from "express";

const test = Router();

test.get("/api/v1/test", (req, res) => {
  res.json({ message: "Hello World" });
});

export { test };
