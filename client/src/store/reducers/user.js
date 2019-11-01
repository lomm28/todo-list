import { successAction, GET_USER } from '../types';

const initialState = {
  profile: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case successAction(GET_USER): {
      return {
        ...state,
        profile: action.payload,
      };
    }
    default:
      return state;
  }
};
