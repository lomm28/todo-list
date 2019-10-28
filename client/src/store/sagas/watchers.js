import { takeLatest } from 'redux-saga/effects';
import { registerSaga, loginSaga } from './authenticationSaga';

import { successAction, CREATE_USER, LOGIN_USER } from '../types';

export default function* watchUserAuthentication() {
  yield takeLatest(successAction(CREATE_USER), registerSaga);
  yield takeLatest(successAction(LOGIN_USER), loginSaga);
}
