import yup from "yup";

import { CommonParams } from "../types";

export type ListQuery = {
  page?: number;
  count?: number;
  sort?: string;
  dir?: string;
  q?: string;
  [key: string]: any;
};

// const readAll = {
//   query: yup.object<ListQuery>().shape({
//     page: yup.number().integer().min(1).default(1),
//     count: yup.number().integer().min(1).max(100).default(30),
//     sort: yup.string().oneOf(["id", "name"]).default("createdAt"),
//     dir: yup.string().oneOf(["ASC", "DESC"]).default("DESC"),
//     q: yup.string().nullable().default(""),
//   }),
// };

const readOne = {
  params: yup.object<CommonParams>().required().shape({
    id: yup.number().required(),
  }),
};

const erase = {
  params: yup.object<CommonParams>().required().shape({
    id: yup.number().required(),
  }),
};

export default {
  // readAll,
  readOne,
  erase,
};
