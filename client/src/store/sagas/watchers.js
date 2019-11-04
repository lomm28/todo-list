import { takeLatest } from 'redux-saga/effects';
import { todosSaga } from './todos';

import { successAction, CREATE_TODO, UPDATE_TODO, DELETE_TODO } from '../types';

export function* watchCreateNewTodo() {
  yield takeLatest(successAction(CREATE_TODO), todosSaga);
}

export function* watchUpdateTodo() {
  yield takeLatest(successAction(UPDATE_TODO), todosSaga);
}

export function* watchDeleteTodo() {
  yield takeLatest(successAction(DELETE_TODO), todosSaga);
}
