const sequelize = require("./db");
const { exampleTest, pereviousTest } = require("./parsing");

const app = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
    console.log("Connection has been established successfully.");

    exampleTest("Navoiy viloyati", 2, 56, 0);
    pereviousTest("Navoiy viloyati", 2, 56, 0);
  } catch (e) {
    console.error("Unable to connect to the database:", e);
  }
};

app();
