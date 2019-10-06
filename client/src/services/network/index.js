import api from './api';

const getProfile = () => {
  return api.get('profile');
};

const createUser = (name, password) => {
  return api.get('/register', { name, password });
};

export default {
  getProfile,
  createUser,
};
