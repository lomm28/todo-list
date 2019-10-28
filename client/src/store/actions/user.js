import { CREATE_USER, LOGIN_USER } from '../types';
import network from '../../services/network';
import { callApi } from './utils';

export const createUser = data => {
  const action = () => network.createUser(data);
  return callApi(action, CREATE_USER);
};

export const loginUser = data => {
  const action = () => network.loginUser(data);
  return callApi(action, LOGIN_USER);
};
