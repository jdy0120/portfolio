import { Request } from "express";

import exampleService from "../services/example.service";
import { BasicResponse, ListResponse } from "../../shared/types";
import { Example } from "../models";
import { getResponsePhrase } from "../../shared/utils/http";
import { STATUS_CODES } from "../../shared/constants";

const write = async (req: Request) => {
  const data = await exampleService.write(req);

  return data;
};

const readAll = async (req: Request) => {
  const { count, rows: data } = await exampleService.readAll(req);

  req.statusCode = STATUS_CODES.OK;

  return <ListResponse<Example>>{
    result: true,
    message: getResponsePhrase(STATUS_CODES.OK),
    count,
    data,
  };
};

const readOne = async (req: Request) => {
  const data = await exampleService.readOne(req);

  return <BasicResponse<Example>>{
    result: true,
    message: getResponsePhrase(STATUS_CODES.OK),
    data,
  };
};

const erase = async (req: Request) => {
  const { result } = await exampleService.erase(req);

  req.statusCode = STATUS_CODES.OK;

  return <BasicResponse<Example>>{
    result,
    message: getResponsePhrase(STATUS_CODES.OK),
  };
};

export default {
  write,
  readAll,
  readOne,
  erase,
};
