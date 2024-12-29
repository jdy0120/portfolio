import { Request } from "express";
import { ParamsDictionary } from "express-serve-static-core";

import * as Blog from "../models";
import { seq } from "../../shared/configs/sequelize.config";
import { ListQuery } from "../../shared/dtos/common.dto";
import { isNotEmpty } from "../../shared/utils";
import fileService from "../../shared/services/file.service";
import { AttachmentThumbnail, AttachmentImage } from "../models";
import { getStaticUploadPath } from "../../shared/utils/file";

const write = async (
  req: Request<unknown, unknown, Blog.PostCreationAttributes, unknown>
) => {
  const { user, body } = req;
  const {
    thumbnails = [],
    attachmentImages = [],
    ...bodyRest
  } = body;

  const transaction = await seq.transaction();

  try {
    const post = await Blog.Post.write(
      { ...bodyRest },
      { transaction }
    );

    const now = new Date();

    console.log("doyeon", thumbnails);

    if (isNotEmpty(thumbnails)) {
      const newPath = `thumbnails/${now.getFullYear()}/${
        now.getMonth() + 1
      }/${post.id}`;

      console.log("doyeon", newPath, thumbnails);

      await fileService.moveTempsToUploads({
        attachmentTempList: thumbnails,
        domain: "blog",
        newPath,
        transaction,
        beforeMove: async (attachmentTemps) => {
          await AttachmentThumbnail.bulkWrite(
            attachmentTemps.map((attachmentTemp) => {
              const { id, path, ...data } = attachmentTemp;
              const clientPath = `${getStaticUploadPath(
                "blog"
              )}/${newPath}/${data.filename}`;

              return {
                ...data,
                path: clientPath,
                postId: post.id,
              };
            }),
            { transaction }
          );
        },
      });
    }

    if (isNotEmpty(attachmentImages)) {
      const newPath = `attachmentimages/${now.getFullYear()}/${
        now.getMonth() + 1
      }/${post.id}`;

      await fileService.moveTempsToUploads({
        attachmentTempList: attachmentImages,
        domain: "blog",
        newPath,
        transaction,
        beforeMove: async (attachmentTemps) => {
          await AttachmentImage.bulkWrite(
            attachmentTemps.map((attachmentTemp) => {
              const { id, path, ...data } = attachmentTemp;
              const clientPath = `${getStaticUploadPath(
                "blog"
              )}/${newPath}/${data.filename}`;

              return {
                ...data,
                path: clientPath,
                postId: post.id,
              };
            }),
            { transaction }
          );
        },
      });
    }

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
