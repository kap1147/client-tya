import { useState } from "react";
import { useSelector } from "react-redux";
// Components
import NewAlert from './NewAlert.component';
// Mui Stuff
import { Badge, makeStyles, Typography } from "@material-ui/core";
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";

const useStyles = makeStyles((theme) => ({
  linksWrapper: {
    display: "flex",
    height: "75px",
    alignItems: "center"
  },
  link: {
    padding: "0px 5px",
    "&:hover": {
      cursor: "pointer"
    }
  },
  dropdown: {
    paddingLeft: "10px",
    display: "inline-block",
    position: "relative",
    
  },
  dropContainer: {
    display: "flex",
    "&:hover": {
      cursor: "pointer"
    }
  },
  dropdownContent: {
    height: '350px',
    position: "absolute",
    backgroundColor: '#f9f9f9',
    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
    zIndex: 1,
    overflowY: 'auto',
    right: '4px',
    borderRadius: '3px',
    "& > *": {
      borderBottom: '1px solid',
      "&:hover": {
        cursor: 'pointer'
      }
    }
  }
}));

export default function AuthLinks() {
  const classes = useStyles();
  const {user} = useSelector((state) => state.user);
  const alerts = useSelector((state) => state.alerts);
  const [isOpen, setIsOpen] = useState();
  const [isAlertOpen, setIsAlertOpen] = useState();
  if (alerts) console.log(alerts);
  return (
    <div className={classes.linksWrapper}>
      <div className={classes.link}>
        { alerts && (
          <div className={classes.dropdown}>
            <div className={classes.dropContainer}>
              <Badge badgeContent={alerts.length} color="secondary" onClick={()=>setIsAlertOpen(!isAlertOpen)}>
                <NotificationsIcon />
              </Badge>
            </div>
	    {isAlertOpen && (
              <div className={classes.dropdownContent}>
                {alerts.map(alert => <NewAlert alert={alert} />)}
	      </div>
	    )}
	  </div>
	)}
      </div>
      <div className={classes.link}>
        <Badge badgeContent={1} color="primary">
          <MailIcon />
        </Badge>
      </div>
      <div className={classes.dropdown} onClick={() => setIsOpen(!isOpen)}>
        <div className={classes.dropContainer}>
          <div>
            {user ? <Typography variant='body2' noWrap>Hi, {user.alias}</Typography> : <Typography variant='body2' noWrap>...Loading</Typography>}
          </div>
          {isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </div>
        {isOpen && (
          <div className={classes.dropdownContent}>
            <Typography variant='body2' noWrap>View Profile</Typography>
            <Typography variant='body2' noWrap>View Posts</Typography>
            <Typography variant='body2' noWrap>View Bids</Typography>
          </div>
        )}
      </div>
      <div className={classes.link}>Logout</div>
    </div>
  );
}
