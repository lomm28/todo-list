const Todo = require("../models/Todo");

const getAllTodos = async () => await Todo.findAll();

const getUserTodos = async obj =>
  await User.findOne({
    where: obj
  }).getTodos();

const createTodo = async ({ description, state, userId }) =>
  await Todo.create({ description, state, userId });

const updateTodo = async todo => {
  const { state, id } = todo;
  try {
    const updatedTodo = await Todo.update({ state }, { returning: true, where: { id } });
    return updatedTodo;
  } catch (e) {
    return e.message;
  }
}

const deleteTodo = async todoId => {
  try {
    await Todo.destroy({
      where: {
        id: todoId
      }
    });
  } catch (e) {
    return e.message;
  }
}

module.exports = { getAllTodos, getUserTodos, createTodo, updateTodo, deleteTodo };