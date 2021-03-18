import { ACTION } from '../actions/types';

const initialState = '';

export const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTION.SAVE_PROFILE:
            return state = action.payload
        default:
            return state
    }
}