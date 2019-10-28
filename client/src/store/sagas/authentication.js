import { createUser, loginUser } from '../actions/user';

export function* registerSaga() {
  yield put(createUser());
}

export function* loginSaga() {
  yield put(loginUser());
}
