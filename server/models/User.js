const Sequelize = require("sequelize");
const sequelize = require("../db");

const User = sequelize.define("user", {
  name: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  }
});

User.sync()
  .then(() => console.log("Oh yeah! User table created successfully"))
  .catch(err =>
    console.log("BTW, did you enter wrong database credentials?", err)
  );

module.exports = User;
