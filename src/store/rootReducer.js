import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import first from '../modules/First/redux/first';
import { reducer as authentication } from '../shared/redux/authentication';
import second from '../modules/Second/redux/second';

const rootReducer = combineReducers({
  form,
  first,
  second,
  authentication
});

export default rootReducer;
