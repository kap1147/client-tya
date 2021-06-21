import {
    SET_AUTH,
    SET_REFRESH_TOKEN,
    SET_ACCESS_TOKEN,
    CLEAR_AUTH
} from "../types";

const initialState = {
    authenticated: false,
    refreshToken: null,
    accessToken: null
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_AUTH:
      return {
	...state,
        authenticated: action.payload
      };
    case SET_REFRESH_TOKEN:
        return {
            ...state,
	    refreshToken: action.payload
	};
    case SET_ACCESS_TOKEN:
        return {
            ...state,
	    accessToken: action.payload
	};
    case CLEAR_AUTH:
      return initialState;
    default:
      return state;
  }
}
