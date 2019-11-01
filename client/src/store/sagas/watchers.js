import { takeLatest } from 'redux-saga/effects';
import { todosSaga } from './todos';

import { successAction, CREATE_TODO } from '../types';

export default function* watchCreateNewTodo() {
  yield takeLatest(successAction(CREATE_TODO), todosSaga);
}
