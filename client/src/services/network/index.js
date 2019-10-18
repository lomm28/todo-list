import api from './api';

const getProfile = () => {
  return api.get('profile');
};

const createUser = creadentials => {
  return api.post('/register', creadentials);
};

const loginUser = creadentials => {
  return api.post('/login', creadentials);
};

export default {
  getProfile,
  createUser,
  loginUser,
};
