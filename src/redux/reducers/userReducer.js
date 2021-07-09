import {
  SET_AUTHENTICATED,
  SIGN_IN,
  SIGN_OUT
} from "../types";

const initialState = {
  authenticated: false,
  user: null
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: action.payload,
      };
    case SIGN_IN:
      return {
        authenticated: true,
        user: {
            ...action.payload
        },
      };
      case SIGN_OUT:
      return {
        authenticated: false,
        user: null
      };
    default:
      return state;
  }
}
