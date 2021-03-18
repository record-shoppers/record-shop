import { ACTION } from '../actions/types';

const initialState = '';

export const loginReducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTION.LOGIN:
            return state = action.payload
        default:
            return state
    }
}