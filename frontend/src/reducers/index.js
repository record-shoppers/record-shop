import { combineReducers } from 'redux';
import { recordReducer } from './recordReducer';
import {loginReducer} from './loginReducer'
import { profileReducer } from './profileReducer';

export default combineReducers({recordReducer, loginReducer, profileReducer});
