import { applyMiddleware, compose, createStore } from 'redux';
import logger from 'redux-logger';
import promise from './redux-promise.js';
import rootReducer from './root-reducer.js'

export default function configureStore() {
  const middleware = [
    logger,
    promise
  ];

  return createStore(rootReducer, compose (
    applyMiddleware(...middleware)
  ));
}
