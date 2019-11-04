import api from './api';

const createUser = creadentials => {
  return api.post('/register', creadentials);
};

const loginUser = creadentials => {
  return api.post('/login', creadentials);
};

const getLoggedInUser = userName => {
  return api.get('/user', userName);
}

const getAllTodos = () => api.get('/todos');

const getUserTodos = userName => {
  return api.get('/userTodos', userName);
};

const createTodo = fields => {
  return api.post('/createTodo', fields);
}

const updateTodo = todoItem => {
  return api.put('/updateTodo', { todoItem });
}

const deleteTodo = todoId => {
  return api.delete(`/deleteTodo/${todoId}`);
}

export default {
  createUser,
  loginUser,
  getLoggedInUser,
  getAllTodos,
  getUserTodos,
  createTodo,
  updateTodo,
  deleteTodo
};
