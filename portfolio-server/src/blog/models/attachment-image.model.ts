import * as SQLZ_TS from "sequelize-typescript";
import * as SQLZ from "sequelize";

import { Post } from "./post.model";

export interface AttachmentImageAttributes {
  id: number;
  filename: string;
  originalFilename: string;
  path: string;
  mimetype: string;
  size: number;
  postId: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  post: Post;
}

export type AttachmentImageOmitAttributes =
  | "id"
  | "createdAt"
  | "updatedAt"
  | "deletedAt"
  | "post";
export type AttachmentImageCreationAttributes = SQLZ.Optional<
  AttachmentImageAttributes,
  AttachmentImageOmitAttributes
>;

@SQLZ_TS.Table({
  tableName: "attachment_image",
  timestamps: true,
  paranoid: true,
})
export class AttachmentImage extends SQLZ_TS.Model<
  AttachmentImageAttributes,
  AttachmentImageCreationAttributes
> {
  @SQLZ_TS.PrimaryKey
  @SQLZ_TS.AutoIncrement
  @SQLZ_TS.Column(SQLZ_TS.DataType.INTEGER)
  override readonly id!: number;

  @SQLZ_TS.AllowNull(false)
  @SQLZ_TS.Column(SQLZ_TS.DataType.STRING)
  readonly filename!: string;

  @SQLZ_TS.AllowNull(false)
  @SQLZ_TS.Column(SQLZ_TS.DataType.STRING)
  readonly originalFilename!: string;

  @SQLZ_TS.AllowNull(false)
  @SQLZ_TS.Column(SQLZ_TS.DataType.STRING)
  readonly path!: string;

  @SQLZ_TS.AllowNull(false)
  @SQLZ_TS.Column(SQLZ_TS.DataType.STRING)
  readonly mimetype!: string;

  @SQLZ_TS.AllowNull(false)
  @SQLZ_TS.Column(SQLZ_TS.DataType.INTEGER)
  readonly size!: number;

  @SQLZ_TS.AllowNull(false)
  @SQLZ_TS.ForeignKey(() => Post)
  @SQLZ_TS.Column(SQLZ_TS.DataType.INTEGER)
  readonly postId!: number;

  @SQLZ_TS.CreatedAt
  readonly createdAt!: Date;

  @SQLZ_TS.UpdatedAt
  readonly updatedAt!: Date;

  @SQLZ_TS.DeletedAt
  readonly deletedAt!: Date;

  @SQLZ_TS.BelongsTo(() => Post)
  readonly post!: Post;

  static async bulkWrite(
    values: AttachmentImageCreationAttributes[],
    options?: SQLZ.CreateOptions<SQLZ.Attributes<AttachmentImage>>
  ) {
    return await this.bulkCreate(values, {
      returning: true,
      ...options,
    }).catch((error) => {
      console.error(error);
      throw error;
    });
  }

  static async readAll(
    options?: SQLZ.FindOptions<SQLZ.Attributes<AttachmentImage>>
  ) {
    return await this.findAll({
      nest: true,
      raw: false,
      ...options,
    }).catch((error) => {
      console.error(error);
      throw error;
    });
  }

  static async erase(
    id: number,
    options?: SQLZ.DestroyOptions<SQLZ.Attributes<AttachmentImage>>
  ) {
    return this.destroy({
      where: { id },
      ...options,
    }).catch((error) => {
      console.error(error);
      throw error;
    });
  }

  static async eraseAll(
    options?: SQLZ.DestroyOptions<SQLZ.Attributes<AttachmentImage>>
  ) {
    return this.destroy({
      ...options,
    }).catch((error) => {
      console.error(error);
      throw error;
    });
  }
}
