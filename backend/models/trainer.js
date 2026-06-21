"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Trainer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Trainer.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Name cannot be empty",
          },
        },
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Role cannot be empty",
          },
        },
      },
      bio: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "bio cannot be empty",
          },
        },
      },
      image: {
        type: DataTypes.STRING(500),
        allowNull: true,
        validate: {
          isUrl: {
            msg: "Image must be a valid URL",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Trainer",
      tableName: "trainers",
      timestamps: true,
    },
  );
  return Trainer;
};
