import { successAction, CREATE_USER } from '../types';

const initialState = {
  user: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case successAction(CREATE_USER): {
      return {
        ...state,
        user: action.payload.user,
      };
    }
    default:
      return state;
  }
};
