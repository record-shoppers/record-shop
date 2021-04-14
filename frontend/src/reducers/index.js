import { combineReducers } from 'redux';
import { recordReducer } from './recordReducer';
import {loginReducer} from './loginReducer'
import { profileReducer } from './profileReducer';
import { basketReducer } from './basketReducer';

export default combineReducers({recordReducer, loginReducer, profileReducer, basketReducer});
