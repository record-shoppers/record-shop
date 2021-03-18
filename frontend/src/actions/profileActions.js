import {ACTION} from './types';

export const show = (record) => {
    return {type: ACTION.SAVE_PROFILE, payload: record}
}