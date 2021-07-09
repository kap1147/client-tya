import {
  ADD_ALERT,
  REMOVE_ALERT,
  CLEAR_ALERTS,
  SET_ALERTS
} from "../types";

import { removeAlert } from './utils'

const initialState = null;

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_ALERT:
      return [
        ...state,
        action.payload
      ];
    case REMOVE_ALERT:
      return removeAlert(state, action.payload);
    case CLEAR_ALERTS:
      return initialState;
    case SET_ALERTS:
      return [...action.payload];
    default:
      return state;
  }
}
