import * as SQLZ_TS from "sequelize-typescript";
import * as SQLZ from "sequelize";

import { BlogPost } from "./blogpost.model";
import { ListQuery } from "../../shared/dtos/common.dto";

interface PriorityPostAttributes {
  id: number;
  postId: number;
  priority: number;
  blogPost: BlogPost;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export type PriorityPostOmitAttributes =
  | "id"
  | "createdAt"
  | "updatedAt";
export type PriorityPostCreationAttributes = SQLZ.Optional<
  PriorityPostAttributes,
  PriorityPostOmitAttributes
>;

@SQLZ_TS.Table({
  tableName: "priority_posts",
})
export class PriorityPost extends SQLZ_TS.Model<
  PriorityPostAttributes,
  PriorityPostCreationAttributes
> {
  @SQLZ_TS.PrimaryKey
  @SQLZ_TS.AutoIncrement
  @SQLZ_TS.Column(SQLZ_TS.DataType.INTEGER)
  override readonly id!: number;

  @SQLZ_TS.Column(SQLZ_TS.DataType.INTEGER)
  declare postId: number;

  @SQLZ_TS.Column(SQLZ_TS.DataType.INTEGER)
  declare priority: number;

  @SQLZ_TS.BelongsTo(() => BlogPost)
  declare blogPost: BlogPost;

  @SQLZ_TS.CreatedAt
  override readonly createdAt!: Date;

  @SQLZ_TS.UpdatedAt
  override readonly updatedAt!: Date;

  @SQLZ_TS.DeletedAt
  override readonly deletedAt!: Date;

  static async readAll(
    query: ListQuery,
    options?: SQLZ.FindOptions<SQLZ.Attributes<PriorityPost>>
  ) {
    const {
      page = 1,
      count = 10,
      sort = "createdAt",
      dir = "DESC",
    } = query;

    return this.findAndCountAll({
      order: [[sort, dir]],
      limit: count,
      offset: (page - 1) * count,
      nest: true,
      raw: false,
      ...options,
    });
  }

  static async readOne(
    id: number,
    options?: SQLZ.FindOptions<SQLZ.Attributes<PriorityPost>>
  ) {
    return this.findByPk(id, {
      nest: true,
      raw: false,
      ...options,
    });
  }

  static async erase(
    id: number,
    options?: SQLZ.DestroyOptions<SQLZ.Attributes<PriorityPost>>
  ) {
    const destroyedCount = await this.destroy({
      where: { id },
      ...options,
    });

    let result = true;
    if (destroyedCount === 0) {
      result = false;
    }
    return result;
  }
}
