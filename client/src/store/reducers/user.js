import { successAction, GET_PROFILE } from '../types';

const initialState = {
  profile: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case successAction(GET_PROFILE): {
      return {
        ...state,
        profile: action.payload,
      };
    }
    default:
      return state;
  }
};
