const { Sequelize } = require("sequelize");
const db = require("./database");

module.exports = db.define("campus", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      "https://media.istockphoto.com/photos/yale-university-buildings-picture-id475315086?k=20&m=475315086&s=612x612&w=0&h=Y6dsoNtH6uceZRmcoVbcmqYyHzyH0aVsJxb1w4FAebA=",
    validate: { isURL: true },
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: Sequelize.TEXT,
    validate: {
      notEmpty: true,
    },
  },
});
