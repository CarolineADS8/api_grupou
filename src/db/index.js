import config from "../config/db";
import { Sequelize } from "sequelize/";

let connection = null;

export const getConnection = () => {
  if (!connection) {
    try {
      connection = new Sequelize(config.DB, config.USER, config.PASSWORD, {
        host: config.HOST,
        dialect: config.DIALECT,
        port: config.PORT,
      });
    } catch (error) {
      console.log("Error to database connect");
      console.log(error);
      process.exit(1);
    }
  }
  return connection;
};
