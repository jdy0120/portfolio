import { Request } from "express";

import postService from "../services/post.service";
import { STATUS_CODES } from "../../shared/constants";
import { BasicResponse } from "../../shared/types";
import { getResponsePhrase } from "../../shared/utils/http";
import { Post } from "../models";

const write = async (req: Request) => {
  const data = await postService.write(req);

  req.statusCode = STATUS_CODES.CREATED;

  return <BasicResponse<Post>>{
    result: true,
    message: getResponsePhrase(STATUS_CODES.CREATED),
    data,
  };
};

const readOne = async (req: Request) => {
  const data = await postService.readOne(req);

  req.statusCode = STATUS_CODES.OK;

  return <BasicResponse<Post>>{
    result: true,
    message: getResponsePhrase(STATUS_CODES.OK),
    data,
  };
};

const readSlug = async (req: Request) => {
  const data = await postService.readSlug(req);

  req.statusCode = STATUS_CODES.OK;

  return <BasicResponse<Post>>{
    result: true,
    message: getResponsePhrase(STATUS_CODES.OK),
    data,
  };
};

const readAll = async (req: Request) => {
  const data = await postService.readAll(req);

  req.statusCode = STATUS_CODES.OK;

  return <BasicResponse<Post[]>>{
    result: true,
    message: getResponsePhrase(STATUS_CODES.OK),
    data,
  };
};

const modify = async (req: Request) => {
  const data = await postService.modify(req);

  req.statusCode = STATUS_CODES.OK;

  return <BasicResponse<Post>>{
    result: true,
    message: getResponsePhrase(STATUS_CODES.OK),
    data,
  };
};

const erase = async (req: Request) => {
  const data = await postService.erase(req);

  req.statusCode = STATUS_CODES.OK;

  return <BasicResponse<{ result: boolean }>>{
    result: true,
    message: getResponsePhrase(STATUS_CODES.OK),
    data,
  };
};

export default { write, readOne, readSlug, readAll, modify, erase };
