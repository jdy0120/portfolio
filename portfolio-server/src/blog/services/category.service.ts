import { Request } from "express";

import * as Blog from "../models";
import { seq } from "../../shared/configs/sequelize.config";
import { ListQuery } from "../../shared/dtos/common.dto";

const write = async (
  req: Request<
    unknown,
    unknown,
    Blog.CategoryCreationAttributes,
    unknown
  >
) => {
  const { body } = req;

  const transaction = await seq.transaction();

  try {
    const category = await Blog.Category.write(body, { transaction });
    await transaction.commit();
    return category;
  } catch (error) {
    await transaction.rollback();
    throw error;
  }
};

const readAll = async (
  req: Request<unknown, unknown, unknown, ListQuery>
) => {
  const { query } = req;

  return Blog.Category.readAll(query);
};

export default { write, readAll };
