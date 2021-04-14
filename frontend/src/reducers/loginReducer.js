import { ACTION } from "../actions/types";

const initialState = {
  user: "",
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.LOGIN:
      return { user: action.payload };
    case ACTION.AUTH:
      return { user: action.payload };
    default:
      return state;
  }
};
