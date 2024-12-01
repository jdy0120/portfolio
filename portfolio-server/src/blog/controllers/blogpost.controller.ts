import { Request } from "express";

import blogPostService from "../services/blogpost.service";

import {
  BaseResponse,
  ListResponse,
} from "../../shared/types/response";
import { BlogPost } from "../models";

const write = async (req: Request) => {
  const data = await blogPostService.write(req);

  return <BaseResponse<BlogPost>>{
    result: true,
    data,
  };
};

const readAll = async (req: Request) => {
  const { rows: data, count } = await blogPostService.readAll(req);

  return <ListResponse<BlogPost>>{
    result: true,
    count,
    data,
  };
};

export default { write, readAll };
