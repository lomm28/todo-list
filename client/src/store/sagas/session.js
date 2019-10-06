import { takeLatest, put } from 'redux-saga/effects';
import { successAction, START_SESSION } from '../types';
import { getProfile } from '../actions/user';

function* handleStartSession() {
  yield put(getProfile());
}

function* watchStartSession() {
  yield takeLatest(successAction(START_SESSION), handleStartSession);
}

export default [watchStartSession];
