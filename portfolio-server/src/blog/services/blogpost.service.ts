import { Request } from "express";

import { BlogPost, BlogPostCreationAttributes } from "../models";
import { ListQuery } from "../../shared/dtos/common.dto";
import { ParamsDictionary } from "express-serve-static-core";

const write = async (
  req: Request<unknown, unknown, BlogPostCreationAttributes, unknown>
) => {
  req;
  return BlogPost.write({ ...req.body });
};

const readAll = async (
  req: Request<unknown, unknown, unknown, ListQuery>
) => {
  return BlogPost.readAll(req.query);
};

const readOne = async (req: Request<{ id: number }>) => {
  return BlogPost.readOne(req.params.id);
};

const modify = async (
  req: Request<{ id: number }, unknown, BlogPostAttributes>
) => {
  return BlogPost.modify(req.params.id, req.body);
};

const erase = async (
  req: Request<ParamsDictionary, unknown, unknown, unknown>
) => {
  return BlogPost.erase(req.params.id);
};

export default { write, readAll, readOne, modify, erase };
