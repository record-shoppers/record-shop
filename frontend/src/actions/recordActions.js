import {ACTION} from '../actions/recordTypes';

export const show = (record) => {
    return {type: ACTION.SHOW, payload: record}
}