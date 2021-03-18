import {ACTION} from './types';

export const show = (record) => {
    return {type: ACTION.SHOW, payload: record}
}