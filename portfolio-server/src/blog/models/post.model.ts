import * as SQLZ_TS from "sequelize-typescript";
import * as SQLZ from "sequelize";
import { ListQuery } from "../../shared/dtos/common.dto";
import { Category } from "./category.model";
import { isUndefined } from "../../shared/utils";
import { HttpError } from "../../shared/errors/http-error";
import { STATUS_CODES } from "../../shared/constants";

export interface PostAttributes {
  id: number;
  title: string;
  description: string;
  filePath: string;
  slug: string;
  categoryId: number;
  imageUrl: string;
  metaDescription: string;
  viewCount: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export type PostOmitAttributes = "id" | "createdAt" | "updatedAt";
export type PostCreationAttributes = SQLZ.Optional<
  PostAttributes,
  PostOmitAttributes
>;

@SQLZ_TS.Table({
  tableName: "cf_post",
  modelName: "post",
  paranoid: true,
})
export class Post extends SQLZ_TS.Model<
  PostAttributes,
  PostCreationAttributes
> {
  @SQLZ_TS.PrimaryKey
  @SQLZ_TS.AutoIncrement
  @SQLZ_TS.Column(SQLZ_TS.DataType.INTEGER)
  override readonly id!: number;

  @SQLZ_TS.Column(SQLZ_TS.DataType.STRING)
  readonly title!: string;

  @SQLZ_TS.Column(SQLZ_TS.DataType.STRING)
  readonly description!: string;

  @SQLZ_TS.Column(SQLZ_TS.DataType.STRING)
  readonly filePath!: string;

  @SQLZ_TS.Column(SQLZ_TS.DataType.STRING)
  readonly slug!: string;

  @SQLZ_TS.ForeignKey(() => Category)
  @SQLZ_TS.Column(SQLZ_TS.DataType.INTEGER)
  readonly categoryId!: number;

  @SQLZ_TS.Column(SQLZ_TS.DataType.STRING)
  readonly imageUrl!: string;

  @SQLZ_TS.Column(SQLZ_TS.DataType.STRING)
  readonly metaDescription!: string;

  @SQLZ_TS.Column(SQLZ_TS.DataType.INTEGER)
  readonly viewCount!: number;

  @SQLZ_TS.CreatedAt
  override readonly createdAt!: Date;

  @SQLZ_TS.UpdatedAt
  override readonly updatedAt!: Date;

  @SQLZ_TS.DeletedAt
  override readonly deletedAt?: Date;

  @SQLZ_TS.BelongsTo(() => Category)
  readonly category!: Category;

  static async write(
    values: PostCreationAttributes,
    options?: SQLZ.CreateOptions<SQLZ.Attributes<Post>>
  ) {
    return this.create(values, {
      returning: true,
      ...options,
    }).catch((error) => {
      console.error(error);
      throw error;
    });
  }

  static async readOne(
    id: number,
    options?: SQLZ.FindOptions<SQLZ.Attributes<Post>>
  ) {
    return this.findByPk(id, {
      nest: true,
      raw: false,
      ...options,
    }).catch((error) => {
      console.error(error);
      throw error;
    });
  }

  static async readAll(
    query: ListQuery,
    options?: SQLZ.FindOptions<SQLZ.Attributes<Post>>
  ) {
    const {
      page = 1,
      count = 30,
      sort = "createdAt",
      dir = "DESC",
      categoryId,
    } = query;

    const where = categoryId ? { categoryId } : {};

    return this.findAll({
      nest: true,
      raw: false,
      limit: count,
      offset: (page - 1) * count,
      order: [[sort, dir]],
      where,
      ...options,
    }).catch((error) => {
      console.error(error);
      throw error;
    });
  }

  static async modify(
    id: number,
    values: Partial<PostAttributes>,
    options?: Omit<
      SQLZ.UpdateOptions<SQLZ.Attributes<Post>>,
      "returning" | "where"
    >
  ) {
    const [affectedCount, data] = await this.update(values, {
      where: { id },
      returning: true,
      ...options,
    }).catch((error) => {
      console.error(error);
      throw error;
    });

    if (affectedCount === 0 || isUndefined(data)) {
      throw new HttpError(STATUS_CODES.NOT_FOUND, "Post not found");
    }

    return data[0];
  }

  static async delete(
    id: number,
    options?: SQLZ.DestroyOptions<SQLZ.Attributes<Post>>
  ) {
    const destroyedCount = await this.destroy({
      where: { id },
      ...options,
    }).catch((error) => {
      console.error(error);
      throw error;
    });

    let result = true;
    if (destroyedCount === 0) {
      result = false;
    }

    return { result };
  }
}
