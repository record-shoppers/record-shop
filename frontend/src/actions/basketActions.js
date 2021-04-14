import { ACTION } from "./types";

export const addItem = (item) => {
    return { type: ACTION.ADD_ITEM, payload: item };
};

export const removeItem = ({id}) => {
    return { type: ACTION.REMOVE_ITEM, payload: id };
};

export const removeAll = () => {
    return { type: ACTION.REMOVE_ALL };
};

export const incrementItem = () => {
    return { type: ACTION.INCREMENT_ITEM };
};

export const decrementItem = () => {
    return { type: ACTION.DECREMENT_ITEM };
};
