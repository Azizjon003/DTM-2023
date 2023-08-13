const { DataTypes } = require("sequelize");
const sequelize = require("..");

const Student = sequelize.define(
  "student",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    full_name: DataTypes.STRING,
    student_code: DataTypes.STRING,
    student_uuid: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: "student",
    indexes: [
      {
        unique: true,
        fields: ["student_uuid", "student_code"],
      },
    ],
  }
);

module.exports = Student;
