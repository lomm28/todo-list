import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';

import reducers from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [thunk, sagaMiddleware];
const initialState = {};

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(...middlewares),
);

sagaMiddleware.run(rootSaga);

export default store;
