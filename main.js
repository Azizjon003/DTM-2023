const sequelize = require("./db");
const { exampleTest, pereviousTest } = require("./parsing");

const app = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
    console.log("Connection has been established successfully.");

    exampleTest("Namangan viloyati", 1, 11, 0);
    pereviousTest("Namangan viloyati", 1, 11, 0);
  } catch (e) {
    console.error("Unable to connect to the database:", e);
  }
};

app();
