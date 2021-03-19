import { combineReducers } from 'redux';
import { recordReducer } from './recordReducer';
import {loginReducer} from './loginReducer'
import { userReducer } from './userReducer';
import { profileReducer } from './profileReducer';

export default combineReducers({recordReducer, userReducer, loginReducer, profileReducer});
