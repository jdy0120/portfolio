import * as SQLZ_TS from "sequelize-typescript";
import * as SQLZ from "sequelize";
import { ListQuery } from "../../shared/dtos/common.dto";
import { Post } from "./post.model";

export interface CategoryAttributes {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type CategoryOmitAttributes = "id" | "createdAt" | "updatedAt";
export type CategoryCreationAttributes = SQLZ.Optional<
  CategoryAttributes,
  CategoryOmitAttributes
>;

@SQLZ_TS.Table({ tableName: "cf_category", modelName: "category" })
export class Category extends SQLZ_TS.Model<
  CategoryAttributes,
  CategoryCreationAttributes
> {
  @SQLZ_TS.PrimaryKey
  @SQLZ_TS.AutoIncrement
  @SQLZ_TS.Column(SQLZ_TS.DataType.INTEGER)
  override readonly id!: number;

  @SQLZ_TS.AllowNull(false)
  @SQLZ_TS.Unique
  @SQLZ_TS.Column(SQLZ_TS.DataType.STRING)
  readonly name!: string;

  @SQLZ_TS.CreatedAt
  override readonly createdAt!: Date;

  @SQLZ_TS.UpdatedAt
  override readonly updatedAt!: Date;

  @SQLZ_TS.DeletedAt
  override readonly deletedAt?: Date;

  @SQLZ_TS.HasMany(() => Post)
  readonly posts!: Post[];

  static async write(
    values: CategoryCreationAttributes,
    options?: SQLZ.CreateOptions<SQLZ.Attributes<Category>>
  ) {
    return this.create(values, {
      returning: true,
      ...options,
    }).catch((error) => {
      console.error(error);
      throw error;
    });
  }

  static async readAll(
    query: ListQuery,
    options?: SQLZ.FindOptions<SQLZ.Attributes<Category>>
  ) {
    const {
      page = 1,
      count = 30,
      sort = "createdAt",
      dir = "DESC",
    } = query;

    return this.findAll({
      nest: true,
      raw: false,
      limit: count,
      offset: (page - 1) * count,
      order: [[sort, dir]],
      ...options,
    }).catch((error) => {
      console.error(error);
      throw error;
    });
  }
}
