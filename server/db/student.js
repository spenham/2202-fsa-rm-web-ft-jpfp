const { Sequelize } = require("sequelize");
const db = require("./database");

module.exports = db.define("student", {
  firstName: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
      allowNull: false,
    },
  },
  lastName: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
      allowNull: false,
    },
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
      allowNull: false,
      isEmail: true,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      "https://i0.wp.com/www.additudemag.com/wp-content/uploads/2016/11/Parent_Teens_Helping-ADHD-teens-succeed-in-college_Article_5750_college-students-laptops_ts_477356051-3.jpg?resize=1280%2C720px&ssl=1",
    validate: { isURL: true },
  },
  gpa: {
    type: Sequelize.DECIMAL(3, 2),
    validate: {
      min: 0.0,
      max: 4.0,
    },
  },
});
