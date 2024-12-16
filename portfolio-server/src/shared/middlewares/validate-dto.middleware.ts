import * as yup from "yup";
import { NextFunction, Request, Response } from "express";
import { pick } from "../utils";
import { HttpError } from "../errors/http-error";
import { STATUS_CODES } from "../constants";

interface Schema<B, P, Q> {
  body?: yup.Schema<B>;
  params?: yup.Schema<P>;
  query?: yup.Schema<Q>;
}

export const validateDto = <B = any, P = any, Q = any>(
  dto: Schema<B, P, Q>
) => {
  return async (req: Request, _res: Response, next: NextFunction) => {
    const validationSchema = pick(dto, ["body", "params", "query"]);
    const target = pick(req, Object.keys(validationSchema));
    try {
      await yup.object().shape(validationSchema).validate(target);
      return next();
    } catch (error) {
      return next(
        new HttpError(STATUS_CODES.BAD_REQUEST, error as string)
      );
    }
  };
};
