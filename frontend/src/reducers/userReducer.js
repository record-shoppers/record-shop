import { ACTION } from "../actions/types";

const initialState = "";

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.CREATE_USER:
      return (state = action.payload);
    case ACTION.USER_LOGOUT:
      return (state = initialState);
    default:
      return state;
  }
};
