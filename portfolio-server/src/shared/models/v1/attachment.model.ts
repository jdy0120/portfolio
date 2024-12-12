import * as SQLZ_TS from "sequelize-typescript";
import * as SQLZ from "sequelize";

export interface AttachmentTempAttributes {
  id: number;
  filename: string;
  originalFilename: string;
  path: string;
  mimetype: string;
  size: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type AttachmentTempOmitAttributes =
  | "id"
  | "createdAt"
  | "updatedAt";
export type AttachmentTempCreationAttributes = SQLZ.Optional<
  AttachmentTempAttributes,
  AttachmentTempOmitAttributes
>;

@SQLZ_TS.Table({
  tableName: "attachment_temp",
  modelName: "attachmentTemp",
})
export class AttachmentTemp extends SQLZ_TS.Model<
  AttachmentTempAttributes,
  AttachmentTempCreationAttributes
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

  @SQLZ_TS.CreatedAt
  override readonly createdAt!: Date;

  @SQLZ_TS.UpdatedAt
  override readonly updatedAt!: Date;

  @SQLZ_TS.DeletedAt
  override readonly deletedAt!: Date;

  static async bulkWrite(
    values: AttachmentTempCreationAttributes[],
    options?: SQLZ.CreateOptions<SQLZ.Attributes<AttachmentTemp>>
  ) {
    return this.bulkCreate(values, {
      returning: true,
      ...options,
    }).catch((error) => {
      console.error(error);
      throw error;
    });
  }

  static async readAll(
    options?: SQLZ.FindOptions<SQLZ.Attributes<AttachmentTemp>>
  ) {
    return this.findAll({
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
    options?: SQLZ.DestroyOptions<SQLZ.Attributes<AttachmentTemp>>
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
