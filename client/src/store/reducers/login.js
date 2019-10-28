import { successAction, LOGIN_USER } from '../types';

const setAuthToken = token => {
  const authToken = localStorage.getItem('authToken');
  if (!authToken) {
    localStorage.setItem('authToken', token);
  }
};

const initialState = {
  user: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case successAction(LOGIN_USER): {
      const { user, token } = action.payload;
      if (token) setAuthToken(action.payload.token);
      return {
        ...state,
        user,
      };
    }
    default:
      return state;
  }
};
