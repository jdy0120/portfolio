import { Request, Response } from "express";

import fileService from "../services/file.service";

export const upload = async (req: Request, res: Response) => {
  const data = await fileService.upload(req);

  return res.status(200).json({ hello: "world" });
};
