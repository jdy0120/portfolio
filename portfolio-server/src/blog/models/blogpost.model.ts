import * as SQLZ_TS from "sequelize-typescript";
import * as SQLZ from "sequelize";
import { ListQuery } from "../../shared/dtos/common.dto";

interface BlogPostAttributes {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export type BlogPostOmitAttributes = "id" | "createdAt" | "updatedAt";
export type BlogPostCreationAttributes = SQLZ.Optional<
  BlogPostAttributes,
  BlogPostOmitAttributes
>;

@SQLZ_TS.Table({
  tableName: "blog_posts",
  modelName: "BlogPost",
})
export class BlogPost extends SQLZ_TS.Model<
  BlogPostAttributes,
  BlogPostCreationAttributes
> {
  @SQLZ_TS.PrimaryKey
  @SQLZ_TS.AutoIncrement
  @SQLZ_TS.Column(SQLZ_TS.DataType.INTEGER)
  override readonly id!: number;

  @SQLZ_TS.Column(SQLZ_TS.DataType.STRING)
  readonly title!: string;

  @SQLZ_TS.Column(SQLZ_TS.DataType.TEXT)
  readonly content!: string;

  @SQLZ_TS.CreatedAt
  override readonly createdAt!: Date;

  @SQLZ_TS.UpdatedAt
  override readonly updatedAt!: Date;

  @SQLZ_TS.DeletedAt
  override readonly deletedAt!: Date;

  static async write(
    values: BlogPostCreationAttributes,
    options?: SQLZ.CreateOptions<SQLZ.Attributes<BlogPost>>
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
    options?: SQLZ.FindOptions<SQLZ.Attributes<BlogPost>>
  ) {
    const {
      page = 1,
      count = 10,
      sort = "createdAt",
      dir = "DESC",
      q = "",
    } = query;

    return this.findAndCountAll({
      where: {
        title: {
          [SQLZ.Op.like]: `%${q}%`,
        },
      },
      nest: true,
      raw: false,
      order: [[sort, dir]],
      limit: count,
      offset: (page - 1) * count,
      ...options,
    });
  }

  static async readOne(
    id: number,
    options?: SQLZ.FindOptions<SQLZ.Attributes<BlogPost>>
  ) {
    return this.findByPk(id, {
      ...options,
    });
  }

  static async modify(
    id: number,
    values: BlogPostCreationAttributes,
    options?: Omit<
      SQLZ.UpdateOptions<SQLZ.Attributes<BlogPost>>,
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

    let result = true;
    if (affectedCount === 0) result = false;

    return { result, data };
  }

  static async erase(
    id: number,
    options?: SQLZ.DestroyOptions<SQLZ.Attributes<BlogPost>>
  ) {
    const destroyedCount = await this.destroy({
      where: { id },
      ...options,
    });

    let result = true;
    if (destroyedCount === 0) {
      result = false;
    }
    return { result };
  }
}
