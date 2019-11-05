/* eslint-disable import/prefer-default-export */

import { put } from 'redux-saga/effects';
import { getAllTodos } from '../actions/todo';

export function* todosSaga() {
  yield put(getAllTodos());
}
