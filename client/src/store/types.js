export const successAction = action => `${action}_SUCCESS`;
export const failureAction = action => `${action}_FAILURE`;

export const GET_USER = 'GET_USER';
export const CREATE_USER = 'CREATE_USER';
export const LOGIN_USER = 'LOGIN_USER';

export const CREATE_TODO = 'CREATE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const GET_USER_TODOS = 'GET_USER_TODOS';
export const GET_ALL_TODOS = 'GET_ALL_TODOS';

export const SHOW_ALL_FILTER = 'SHOW_ALL_FILTER';
export const SHOW_COMPLETED_FILTER = 'SHOW_COMPLETED_FILTER';
export const SHOW_ACTIVE_FILTER = 'SHOW_ACTIVE_FILTER';
export const SHOW_MINE_FILTER = 'SHOW_MINE_FILTER';
export const SHOW_DATE_FILTER = 'SHOW_DATE_FILTER';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';