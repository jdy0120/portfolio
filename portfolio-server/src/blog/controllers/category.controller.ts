import { Request } from "express";
import categoryService from "../services/category.service";
import { STATUS_CODES } from "../../shared/constants";
import { BasicResponse } from "../../shared/types";
import { Category } from "../models";
import { getResponsePhrase } from "../../shared/utils";

const readAll = async (req: Request) => {
  const data = await categoryService.readAll(req);

  req.statusCode = STATUS_CODES.OK;

  return <BasicResponse<Category[]>>{
    result: true,
    message: getResponsePhrase(STATUS_CODES.OK),
    data,
  };
};

const write = async (req: Request) => {
  const data = await categoryService.write(req.body);

  req.statusCode = STATUS_CODES.CREATED;

  return <BasicResponse<Category>>{
    result: true,
    message: getResponsePhrase(STATUS_CODES.CREATED),
    data,
  };
};

export default {
  readAll,
  write,
};
