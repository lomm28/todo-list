const Todo = require("../models/Todo");

const getAllTodos = async () => await Todo.findAll();

const getUserTodos = async obj =>
  await User.findOne({
    where: obj
  }).getTodos();

const createTodo = async ({ description, state, userId }) =>
  await Todo.create({ description, state, userId });

module.exports = { getAllTodos, getUserTodos, createTodo };