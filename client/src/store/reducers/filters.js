import { SHOW_ALL_FILTER } from '../types';

const visibilityFilter = (state = SHOW_ALL_FILTER, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter;