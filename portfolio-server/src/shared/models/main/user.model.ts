import * as SQLZ_TS from "sequelize-typescript";
import * as SQLZ from "sequelize";
import { generateHash } from "../../utils";
import { ListQuery } from "../../dtos/common.dto";

export interface UserAttributes {
  id: number;
  userId: string;
  password: string;
  wrongPasswordCount: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type UserOmitAttributes = "id" | "createdAt" | "updatedAt";
export type UserCreationAttributes = SQLZ.Optional<
  UserAttributes,
  UserOmitAttributes
>;

@SQLZ_TS.Table({
  tableName: "user",
  modelName: "user",
})
export class User extends SQLZ_TS.Model<
  UserAttributes,
  UserCreationAttributes
> {
  @SQLZ_TS.PrimaryKey
  @SQLZ_TS.AutoIncrement
  @SQLZ_TS.Column(SQLZ_TS.DataType.INTEGER)
  override id!: number;

  @SQLZ_TS.AllowNull(false)
  @SQLZ_TS.Unique("user_user_id_unique")
  @SQLZ_TS.Column(SQLZ_TS.DataType.STRING)
  readonly userId!: string;

  @SQLZ_TS.AllowNull(false)
  @SQLZ_TS.Column({
    type: SQLZ_TS.DataType.STRING,
    set(val: string) {
      this.setDataValue("password", generateHash(val));
    },
  })
  readonly password!: string;

  @SQLZ_TS.AllowNull(false)
  @SQLZ_TS.Default(0)
  @SQLZ_TS.Column(SQLZ_TS.DataType.INTEGER)
  readonly wrongPasswordCount!: number;

  @SQLZ_TS.CreatedAt
  override readonly createdAt!: Date;

  @SQLZ_TS.UpdatedAt
  override readonly updatedAt!: Date;

  @SQLZ_TS.DeletedAt
  override readonly deletedAt?: Date;

  static async write(
    values: UserCreationAttributes,
    options?: SQLZ.CreateOptions<SQLZ.Attributes<User>>
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
    options?: Omit<SQLZ.FindOptions<UserAttributes>, "where">
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

  static async readOneByUserId(
    userId: string,
    options?: Omit<SQLZ.FindOptions<UserAttributes>, "where">
  ) {
    return this.findOne({
      where: { userId },
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
    options?: SQLZ.FindOptions<SQLZ.Attributes<User>>
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

  static async modify(
    id: number,
    values: UserAttributes,
    options?: Omit<
      SQLZ.UpdateOptions<SQLZ.Attributes<User>>,
      "returning" | "where"
    >
  ) {
    return this.update(values, {
      where: { id },
      returning: true,
      ...options,
    }).catch((error) => {
      console.error(error);
      throw error;
    });
  }

  static async erase(
    id: number,
    options?: SQLZ.DestroyOptions<SQLZ.Attributes<User>>
  ) {
    return this.destroy({
      where: { id },
      ...options,
    }).catch((error) => {
      console.error(error);
      throw error;
    });
  }
}
