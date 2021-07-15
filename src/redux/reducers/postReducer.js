import { SET_POST, CLEAR_POST } from "../types";

const initialState = [];

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_POST:
      return action.payload;
    case CLEAR_POST:
      return initialState;
    default:
      return state;
  }
}