import { combineReducers } from 'redux';
import { recordReducer } from './recordReducer';
import { userReducer } from './userReducer';

export default combineReducers({recordReducer, userReducer});