const Sequelize = require("sequelize");
const config = require("./config");

const { db, user, password, host } = config;

const sequelize = new Sequelize(db, user, password, {
  dialect: "mysql",
  host,
  dialectOptions: {
    ssl: "Amazon RDS"
  }
});

sequelize
  .authenticate()
  .then(() => console.log("Connection has been established successfully."))
  .catch(err => console.error("Unable to connect to the database: ", err));

module.exports = sequelize;
