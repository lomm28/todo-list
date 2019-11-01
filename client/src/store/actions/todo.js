import { CREATE_TODO, GET_USER_TODOS, GET_ALL_TODOS } from '../types';
import network from '../../services/network';
import { callApi } from './utils';

export const createTodo = data => {
  const action = () => network.createTodo(data);
  return callApi(action, CREATE_TODO);
};

export const getAllTodos = () => {
  const action = () => network.getAllTodos();
  return callApi(action, GET_ALL_TODOS);
};

export const getUserTodos = () => {
  const action = () => network.getUserTodos();
  return callApi(action, GET_USER_TODOS);
};
