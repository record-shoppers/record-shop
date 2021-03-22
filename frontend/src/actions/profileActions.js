import { ACTION } from './types';

export const saveProfile = (pic) => {
    window.localStorage.setItem('profile_picture', pic)
    const profilePicture = window.localStorage.getItem('profile_picture')
    return { type: ACTION.SAVE_PROFILE, payload: profilePicture }
}