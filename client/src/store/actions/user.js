import { GET_PROFILE } from '../types';
import network from '../../services/network';
import { callApi } from './utils';

// eslint-disable-next-line import/prefer-default-export
export const getProfile = () => {
  const action = () => network.getProfile();
  return callApi(action, GET_PROFILE);
};
