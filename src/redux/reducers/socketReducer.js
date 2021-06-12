import { CREATE_SOCKET, CLEAR_SOCKET, LOADING_SOCKET } from "../types";

const initialState = {
  loading: false,
  socket: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_SOCKET:
      return {
	...state,
        socket: action.payload
      };
    case LOADING_SOCKET: 
      return {
          ...state,
          loading: action.payload
      }
    case CLEAR_SOCKET:
      return initialState;
    default:
      return state;
  }
}
