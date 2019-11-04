import { combineReducers } from 'redux';
import user from './user';
import login from './login';
import visibilityFilters from './filters';
import { getAllTodos } from './todos';

const reducers = combineReducers({
  user,
  login,
  visibilityFilters,
  getAllTodos,
});

export default reducers;
