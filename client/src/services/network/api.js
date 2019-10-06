import axios from 'axios';

const instance = axios.create({
  baseURL: '',
  withCredentials: true,
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
