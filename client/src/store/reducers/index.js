import { combineReducers } from 'redux';
import user from './user';
import login from './login';
import register from './register';
import { getAllTodos } from './todos';

const reducers = combineReducers({
  user,
  login,
  register,
  getAllTodos,
});

export default reducers;
