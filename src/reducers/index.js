import { combineReducers } from 'redux';

import seedsReducer from './seeds';
import userReducer from './user';

const rootReducer = combineReducers({
  seeds: seedsReducer,
  user: userReducer,
});

export default rootReducer;
