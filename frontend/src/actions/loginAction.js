import { ACTION } from "./types";

export const loginUser = (user) => {
  return { type: ACTION.LOGIN, payload: user };
};

export const authUser = (result) => {
  return { type: ACTION.AUTH, payload: result };
};
