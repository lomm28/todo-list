const Sequelize = require("sequelize");
const sequelize = require("../db");

const Todo = sequelize.define("todo", {
  userId: {
    type: Sequelize.INTEGER
  },
  description: {
    type: Sequelize.STRING
  },
  state: {
    type: Sequelize.ENUM,
    values: ['completed', 'in progress']
  },
});

Todo.sync()
  .then(() => console.log("Todos table created successfully"))
  .catch(err =>
    console.log("Something went wrong", err)
  );

module.exports = Todo;