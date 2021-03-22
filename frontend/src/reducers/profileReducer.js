import { ACTION } from '../actions/types';
import Johnlenon from "../assets/John+Lennon.jpg"

const initialState = Johnlenon;

export const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTION.SAVE_PROFILE:
            return state = action.payload
        default:
            return state
    }
}