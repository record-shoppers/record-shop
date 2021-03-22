import { ACTION } from '../actions/types';

const initialState = false;

export const loginReducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTION.LOGIN:
            return state = true
        default:
            return state
    }
}