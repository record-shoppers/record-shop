import { ACTION } from '../actions/recordTypes';

const initialState = '';

export const recordReducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTION.SHOW:
            return state = action.payload
        default:
            return state
    }
}