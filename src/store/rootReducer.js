import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import first from '../modules/First/redux/first';
import { reducer as authentication } from '../shared/redux/authentication';


const rootReducer = combineReducers({
  form,
  first,
  authentication
});

export default rootReducer;
