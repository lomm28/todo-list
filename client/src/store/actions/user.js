import { GET_USER, CREATE_USER, LOGIN_USER } from '../types';
import network from '../../services/network';
import { callApi } from './utils';

export const getUser = data => {
  const action = () => network.getLoggedInUser(data);
  return callApi(action, GET_USER);
};

export const createUser = data => {
  const action = () => network.createUser(data);
  return callApi(action, CREATE_USER);
};

export const loginUser = data => {
  const action = () => network.loginUser(data);
  return callApi(action, LOGIN_USER);
};
