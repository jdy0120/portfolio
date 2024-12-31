import { Request } from "express";
import { ParamsDictionary } from "express-serve-static-core";

import {
  Post,
  PostCreationAttributes,
  PostAttributes,
} from "../models";
import { seq } from "../../shared/configs/sequelize.config";
import { ListQuery } from "../../shared/dtos/common.dto";
import { isNotEmpty } from "../../shared/utils";
import fileService from "../../shared/services/file.service";
import { AttachmentThumbnail, AttachmentImage } from "../models";
import { getStaticUploadPath } from "../../shared/utils/file";

const write = async (
  req: Request<unknown, unknown, PostCreationAttributes, unknown>
) => {
  const { user, body } = req;
  const {
    thumbnails = [],
    attachmentImages = [],
    ...bodyRest
  } = body;

  const transaction = await seq.transaction();

  try {
    const post = await Post.write({ ...bodyRest }, { transaction });

    const now = new Date();

    if (isNotEmpty(thumbnails)) {
      const newPath = `thumbnails/${now.getFullYear()}/${
        now.getMonth() + 1
      }/${post.id}`;

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

  return Post.readOne(id);
};

const readSlug = async (req: Request) => {
  const { params } = req;
  const { slug } = params;

  return Post.readSlug(slug);
};

const readAll = async (
  req: Request<unknown, unknown, unknown, ListQuery>
) => {
  const { query } = req;

  return Post.readAll(query);
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
    const post = await Post.changeStatus(id, status, {
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
    Partial<PostAttributes>,
    unknown
  >
) => {
  const { params, body } = req;
  const postId = params.id;
  const {
    thumbnails = [],
    attachmentImages = [],
    ...bodyRest
  } = body;
  const transaction = await seq.transaction();

  try {
    const post = await Post.modify(
      postId,
      { ...bodyRest },
      {
        transaction,
      }
    );

    if (isNotEmpty(thumbnails)) {
      await AttachmentThumbnail.bulkWrite(thumbnails, {
        transaction,
      });

      await AttachmentThumbnail.eraseAll({
        where: { postId: post.id },
        transaction,
      });

      const now = new Date();
      const newPath = `thumbnails/${now.getFullYear()}/${
        now.getMonth() + 1
      }/${post.id}`;

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
      await AttachmentImage.bulkWrite(attachmentImages, {
        transaction,
      });

      await AttachmentImage.eraseAll({
        where: { postId: post.id },
        transaction,
      });

      const now = new Date();
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

const erase = async (
  req: Request<ParamsDictionary, unknown, unknown, unknown>
) => {
  const { params } = req;
  const postId = params.id;

  return Post.delete(postId);
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
