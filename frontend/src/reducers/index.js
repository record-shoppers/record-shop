import { combineReducers } from 'redux';
import { recordReducer } from './recordReducer';
import {loginReducer} from './loginReducer'

export default combineReducers({recordReducer, loginReducer});