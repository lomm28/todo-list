/* eslint-disable import/prefer-default-export */

import { successAction, GET_ALL_TODOS } from '../types';

const initialState = {
  todos: [],
};

export const getAllTodos = (state = initialState, action) => {
  switch (action.type) {
    case successAction(GET_ALL_TODOS): {
      return {
        ...state,
        todos: action.payload,
      };
    }
    default:
      return state;
  }
};
