/* eslint-disable import/prefer-default-export */

import { SET_VISIBILITY_FILTER } from '../types';

export const setVisibilityFilter = filter => dispatch => {
  return dispatch({
    type: SET_VISIBILITY_FILTER,
    filter,
  });
};
