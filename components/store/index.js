import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import { pageReducer } from './page.js';

const loggerMiddleware = createLogger();

export const store = createStore(
  pageReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

export default store;
export * from './page.js';