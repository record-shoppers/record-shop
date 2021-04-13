import { ACTION } from '../actions/types';

const initialState = {};

export const recordReducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTION.SHOW:
            return action.payload
        default:
            return state
    }
}