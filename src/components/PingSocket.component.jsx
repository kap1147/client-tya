import React from 'react'; 
import { useSelector, useDispatch } from "react-redux";
import allActions from '../redux/actions/index';

export default function PingSocket(props) {
  const {socket} = useSelector((state) => state.socket);
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();
    dispatch(allActions.socketActions.pingSocket(socket));
    console.log('socket pinged!')
  };
  return (
    <button onClick={handleClick}>Ping Socket</button>
  );
}
