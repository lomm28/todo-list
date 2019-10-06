import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import reducers from './reducers';

const middlewares = [thunk];
const initialState = {};

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(...middlewares),
);

export default store;
