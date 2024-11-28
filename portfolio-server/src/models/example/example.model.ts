import * as SQLZ_TS from "sequelize-typescript";

@SQLZ_TS.Table({ tableName: "example", modelName: "example" })
export class Example extends SQLZ_TS.Model {
  @SQLZ_TS.Column({ type: SQLZ_TS.DataType.STRING })
  declare name: string;

  @SQLZ_TS.Column({ type: SQLZ_TS.DataType.STRING })
  declare description: string;
}
