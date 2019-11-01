import { fork } from 'redux-saga/effects';
import watchCreateNewTodo from './watchers';

export default function* root() {
  yield fork(watchCreateNewTodo);
}
