import { Sequelize } from "sequelize-typescript";
import * as models from "../models";

const modelSync = async (sequelize: Sequelize) => {
  sequelize.addModels(Object.values(models));
  await sequelize.sync();
};

export const connectPostgres = async () => {
  try {
    const sequelize = new Sequelize({
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT) || 5432,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      dialect: "postgres",
      pool: {
        max: 20,
        min: 0,
        idle: 30 * 1000,
        acquire: 60 * 1000, // Increased from 20s to 60s
      },
    });

    await sequelize.authenticate();

    console.log("table migration start :: only use in local");
    await modelSync(sequelize);

    return sequelize;
  } catch (error) {
    console.error("PostgreSQL 연결 실패", error);
    throw error;
  }
};
