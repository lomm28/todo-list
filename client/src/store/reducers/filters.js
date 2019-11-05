import { SHOW_ALL_FILTER } from '../types';

const initialState = {
  type: SHOW_ALL_FILTER,
  date: null,
};

const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
