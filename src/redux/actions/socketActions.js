import { CREATE_SOCKET, LOADING_SOCKET, CLEAR_SOCKET } from "../types";
import io from "socket.io-client";

const createSocket = () => (dispatch) => {
  dispatch({type: LOADING_SOCKET, payload: true});
  const ENDPOINT = "https://theyardapp.com";
  const socket = io(ENDPOINT);
  dispatch({type: CREATE_SOCKET, payload: socket});
  dispatch({type: LOADING_SOCKET, payload: false});
};

const closeSocket = (socket) => (dispatch) => {
  socket.close();
  dispatch({type: CLEAR_SOCKET});
};

const userOnline = (socket) => (dispatch) => {
  socket.on("connect", () => {
   socket.emit('isOnline');
  })
};

const pingSocket = (socket) => {
  socket.emit("ping");
}

export default { createSocket, closeSocket, userOnline, pingSocket };
