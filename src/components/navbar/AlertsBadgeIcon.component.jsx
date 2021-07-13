import { useEffect, useState } from 'react';
// Redux
import { useSelector } from "react-redux";
import allActions from '../../redux/actions/index';
// Mui stuff
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import NotificationsIcon from '@material-ui/icons/Notifications';

export default function AlertsBadgeIcon(){
  const alerts = useSelector((state) => state.alerts);

  const badgeMarkup = alerts 
    ? <IconButton aria-label={`show ${alerts.length} new notifications`} color="inherit">
        <Badge badgeContent={alerts.length} color="secondary">
          <NotificationsIcon />
        </Badge>
     </IconButton>    
   : <IconButton aria-label="no new notifications" color="inherit">
      <Badge badgeContent={0} color="secondary">
        <NotificationsIcon />
      </Badge>
     </IconButton>
  return badgeMarkup;
};
