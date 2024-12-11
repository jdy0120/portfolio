import { Request } from "express";
import { ParamsDictionary } from "express-serve-static-core";

import { Example } from "../models";

const write = async (req: Request) => {
  return Example.write({ ...req.body });
};

const readAll = async (req: Request) => {
  const { query } = req;
  return Example.readAll(query);
};

const readOne = async (
  req: Request<ParamsDictionary, unknown, unknown, unknown>
) => {
  const { params } = req;

  return Example.readOne(params.id);
};

const erase = async (
  req: Request<ParamsDictionary, unknown, unknown, unknown>
) => {
  const { params } = req;
  return Example.erase(params.id);
};

export default {
  write,
  readAll,
  readOne,
  erase,
};
