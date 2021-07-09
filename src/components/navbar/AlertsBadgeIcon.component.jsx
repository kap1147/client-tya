import { useEffect, useState } from 'react';
// Redux
import { useSelector, useDispatch } from "react-redux";
import allActions from '../../redux/actions/index';
// Mui stuff
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import NotificationsIcon from '@material-ui/icons/Notifications';

export default function AlertsBadgeIcon(){
  const alerts = useSelector((state) => state.alerts);
  const { socket } = useSelector((state) => state.socket);
  const dispatch = useDispatch();

  useEffect(() => {
    if (socket) {
      console.log('we are in the socket!!!!!');
      socket.emit('getAlerts');
      socket.on('allAlerts', (allAlerts) => {
        console.log('alerts: ', allAlerts);
        dispatch(allActions.alertActions.setAlerts(allAlerts));
      });
    };
  }, [socket]);

  useEffect(() => {
    if (alerts) {
      console.log(Object.keys(alerts).length);
    };
  }, [alerts]);

  const badgeMarkup = alerts 
    ? <IconButton aria-label={`show ${Object.keys(alerts).length} new notifications`} color="inherit">
        <Badge badgeContent={Object.keys(alerts).length} color="secondary">
          <NotificationsIcon />
        </Badge>
     </IconButton>    
   : <IconButton aria-label="show 17 new notifications" color="inherit">
      <Badge badgeContent={0} color="secondary">
        <NotificationsIcon />
      </Badge>
     </IconButton>
  return badgeMarkup;
};
