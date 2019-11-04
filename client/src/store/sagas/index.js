import { fork } from 'redux-saga/effects';
import { watchCreateNewTodo, watchUpdateTodo, watchDeleteTodo } from './watchers';

export default function* root() {
  yield fork(watchCreateNewTodo);
  yield fork(watchUpdateTodo);
  yield fork(watchDeleteTodo);
}
