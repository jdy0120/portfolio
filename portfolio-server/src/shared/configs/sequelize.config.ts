import { Sequelize } from "sequelize-typescript";
import * as models from "../../blog/models";
import * as auth from "../../shared/models";
import * as shared from "../models";

const modelSync = async (sequelize: Sequelize) => {
  sequelize.addModels([
    ...Object.values(shared),
    ...Object.values(models),
    ...Object.values(auth),
  ]);
  await sequelize.sync();
};

export let seq: Sequelize;

export const connectPostgres = async () => {
  try {
    seq = new Sequelize({
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT) || 5432,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      dialect: "postgres",
      define: {
        paranoid: true,
        timestamps: true,
      },
      pool: {
        max: 20,
        min: 0,
        idle: 30 * 1000,
        acquire: 60 * 1000, // Increased from 20s to 60s
      },
    });

    await seq.authenticate();

    console.log("table migration start :: only use in local");
    await modelSync(seq);

    return seq;
  } catch (error) {
    console.error("PostgreSQL 연결 실패", error);
    throw error;
  }
};
