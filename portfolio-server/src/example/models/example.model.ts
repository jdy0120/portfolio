import * as SQLZ_TS from "sequelize-typescript";
import * as SQLZ from "sequelize";
import { ListQuery } from "../../shared/dtos/common.dto";

export interface ExampleAttributes {
  id: number;
  name: string;
  address: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type ExampleOmitAttributes = "id" | "createdAt" | "updatedAt";
export type ExampleCreationAttributes = SQLZ.Optional<
  ExampleAttributes,
  ExampleOmitAttributes
>;

@SQLZ_TS.Table({ tableName: "cf_example", modelName: "example" })
export class Example extends SQLZ_TS.Model<
  ExampleAttributes,
  ExampleCreationAttributes
> {
  @SQLZ_TS.PrimaryKey
  @SQLZ_TS.AutoIncrement
  @SQLZ_TS.Column(SQLZ_TS.DataType.INTEGER)
  override readonly id!: number;

  @SQLZ_TS.AllowNull(false)
  @SQLZ_TS.Unique("name_unique")
  @SQLZ_TS.Column(SQLZ_TS.DataType.STRING)
  readonly name!: string;

  @SQLZ_TS.AllowNull(false)
  @SQLZ_TS.Column(SQLZ_TS.DataType.STRING)
  readonly address!: string;

  @SQLZ_TS.CreatedAt
  override readonly createdAt!: Date;

  @SQLZ_TS.UpdatedAt
  override readonly updatedAt!: Date;

  @SQLZ_TS.DeletedAt
  override readonly deletedAt!: Date;

  static async write(
    values: ExampleCreationAttributes,
    options?: SQLZ.CreateOptions<SQLZ.Attributes<Example>>
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
    options?: SQLZ.FindOptions<ExampleAttributes>
  ) {
    const {
      page = 1,
      coount = 30,
      sort = "createdAt",
      dir = "DESC",
      type,
    } = query;
    const where = type ? { type } : {};

    return this.findAndCountAll({
      distinct: true,
      where,
      nest: true,
      raw: false,
      limit: coount,
      offset: (page - 1) * coount,
      order: [[sort, dir]],
      ...options,
    }).catch((error) => {
      throw error;
    });
  }

  static async readOne(
    id: string,
    options?: Omit<SQLZ.FindOptions<ExampleAttributes>, "where">
  ) {
    return this.findByPk(id, {
      nest: true,
      raw: false,
      ...options,
    }).catch((error) => {
      throw error;
    });
  }

  static async erase(
    id: string,
    options?: Omit<SQLZ.DestroyOptions<ExampleAttributes>, "where">
  ) {
    const destryedCount = await this.destroy({
      where: { id },
      ...options,
    });

    let result = true;
    if (destryedCount === 0) {
      result = false;
    }

    return { result };
  }
}
