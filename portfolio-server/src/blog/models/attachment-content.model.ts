import * as SQLZ_TS from "sequelize-typescript";
import * as SQLZ from "sequelize";

import { Post } from "./post.model";

export interface AttachmentContentAttributes {
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

export type AttachmentContentOmitAttributes =
  | "id"
  | "createdAt"
  | "updatedAt"
  | "deletedAt"
  | "post";
export type AttachmentContentCreationAttributes = SQLZ.Optional<
  AttachmentContentAttributes,
  AttachmentContentOmitAttributes
>;

@SQLZ_TS.Table({
  tableName: "attachment_content",
  timestamps: true,
  paranoid: true,
})
export class AttachmentContent extends SQLZ_TS.Model<
  AttachmentContentAttributes,
  AttachmentContentCreationAttributes
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
    values: AttachmentContentCreationAttributes[],
    options?: SQLZ.CreateOptions<SQLZ.Attributes<AttachmentContent>>
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
    options?: SQLZ.FindOptions<SQLZ.Attributes<AttachmentContent>>
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
    options?: SQLZ.DestroyOptions<SQLZ.Attributes<AttachmentContent>>
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
    options?: SQLZ.DestroyOptions<SQLZ.Attributes<AttachmentContent>>
  ) {
    return this.destroy({
      ...options,
    }).catch((error) => {
      console.error(error);
      throw error;
    });
  }
}
