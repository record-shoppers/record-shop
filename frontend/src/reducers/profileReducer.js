import { ACTION } from '../actions/types';
const profilePicture = window.localStorage.getItem('profile_picture')

const initialState = profilePicture;

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION.SAVE_PROFILE:
            return action.payload
        default:
            return state
    }
}