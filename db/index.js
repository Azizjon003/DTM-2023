const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("dtm", "postgres", "1234", {
  host: "localhost",
  port: 5432,
  dialect: "postgres",
  logging: false,
});

module.exports = sequelize;
