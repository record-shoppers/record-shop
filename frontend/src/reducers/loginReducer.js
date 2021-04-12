import { ACTION } from "../actions/types";

const initialState = {
  user: "",
  loggedin: false,
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.LOGIN:
      return { user: action.payload, loggedin: true };
    default:
      return state;
  }
};
