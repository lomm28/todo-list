import axios from 'axios';
import settings from '../../settings.json';

const instance = axios.create({
  baseURL: settings.baseURL,
  timeout: 5000,
});

instance.interceptors.response.use(
  response => {
    console.log('response', response);
    return response.data;
  },
  error => {
    console.log('error', error.response);
    return Promise.reject(error.response);
  },
);

export default instance;
