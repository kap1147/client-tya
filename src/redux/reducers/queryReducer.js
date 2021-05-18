import { SET_QUERY, CLEAR_QUERY } from "../types";

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_QUERY:
      return action.payload;
    case CLEAR_QUERY:
      return initialState;
    default:
      return state;
  }
}
