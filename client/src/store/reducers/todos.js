import { successAction, CREATE_TODO, GET_USER_TODOS, GET_ALL_TODOS } from '../types';

const initialState = {
  todos: null,
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
}