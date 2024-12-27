import { Request } from "express";
import { ParamsDictionary } from "express-serve-static-core";

import * as Blog from "../models";
import { seq } from "../../shared/configs/sequelize.config";
import { ListQuery } from "../../shared/dtos/common.dto";

const write = async (
  req: Request<unknown, unknown, Blog.PostCreationAttributes, unknown>
) => {
  const {
    title,
    description,
    filePath,
    slug,
    categoryId,
    imageUrl,
    metaDescription,
  } = req.body;

  const transaction = await seq.transaction();

  try {
    const post = await Blog.Post.write(
      {
        title,
        description,
        filePath,
        slug,
        categoryId,
        imageUrl,
        metaDescription,
      },
      { transaction }
    );
    await transaction.commit();
    return post;
  } catch (error) {
    await transaction.rollback();
    throw error;
  }
};

const readOne = async (req: Request) => {
  const { params } = req;
  const { id } = params;

  return Blog.Post.findOne({ where: { id } });
};

const readSlug = async (req: Request) => {
  const { params } = req;
  const { slug } = params;

  return Blog.Post.readSlug(slug);
};

const readAll = async (
  req: Request<unknown, unknown, unknown, ListQuery>
) => {
  const { query } = req;

  return Blog.Post.readAll(query);
};

const changeStatus = async (
  req: Request<
    ParamsDictionary,
    unknown,
    { status: boolean },
    unknown
  >
) => {
  const { params, body } = req;
  const { id } = params;
  const { status } = body;

  const transaction = await seq.transaction();

  try {
    const post = await Blog.Post.changeStatus(id, status, {
      transaction,
    });
    await transaction.commit();
    return post;
  } catch (error) {
    await transaction.rollback();
    throw error;
  }
};

const modify = async (
  req: Request<
    ParamsDictionary,
    unknown,
    Partial<Blog.PostAttributes>,
    unknown
  >
) => {
  const { params, body } = req;
  const postId = params.id;
  const transaction = await seq.transaction();

  try {
    const post = await Blog.Post.modify(postId, body, {
      transaction,
    });
    await transaction.commit();
    return post;
  } catch (error) {
    await transaction.rollback();
    throw error;
  }
};

const erase = async (
  req: Request<ParamsDictionary, unknown, unknown, unknown>
) => {
  const { params } = req;
  const postId = params.id;

  return Blog.Post.delete(postId);
};

export default {
  write,
  readOne,
  readSlug,
  readAll,
  changeStatus,
  modify,
  erase,
};
