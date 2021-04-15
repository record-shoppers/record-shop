import { ACTION } from "./types";

export const addInitialState = (item) => {
  return { type: ACTION.ADD_INITIAL_STATE, payload: item };
};

export const addItem = (item) => {
  return { type: ACTION.ADD_ITEM, payload: item };
};

export const removeItem = (item) => {
  return { type: ACTION.REMOVE_ITEM, payload: item };
};

export const removeAll = () => {
  return { type: ACTION.REMOVE_ALL };
};
