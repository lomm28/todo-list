/* eslint-disable no-param-reassign */

import axios from 'axios';
import settings from '../../settings.json';

const instance = axios.create({
  baseURL: settings.baseURL,
  timeout: 5000,
});

instance.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(error.response);
  },
);

instance.interceptors.request.use(config => {
  const authToken = localStorage.getItem('authToken');
  if (authToken) {
    config.headers.Authorization = authToken;
  }
  return config;
});

export default instance;
