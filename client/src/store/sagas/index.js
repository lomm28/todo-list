import { fork, all } from 'redux-saga/effects';
import session from './session';

export default function* root() {
  const watchers = [...session];
  yield all(watchers.map(fork));
}
