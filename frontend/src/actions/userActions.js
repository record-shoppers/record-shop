import {ACTION} from './types';

export const show = (user) => {
    return {type: ACTION.CREATE_USER, payload: user}
}