import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';

import seedsMiddleware from 'src/middlewares/seedsMiddleware';
import authMiddleware from 'src/middlewares/authMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(seedsMiddleware, authMiddleware),
);

const store = createStore(reducer, enhancers);

export default store;
