import {ACTION} from './types';

export const loginUser = (user) => {
    return {type: ACTION.LOGIN, payload: user}
}
