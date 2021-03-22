import {ACTION} from './types';

export const saveProfile = (pic) => {
    return {type: ACTION.SAVE_PROFILE, payload: pic}
}