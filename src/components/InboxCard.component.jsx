import {useHistory} from 'react-router-dom';
// MUI stuff
import { Avatar, Button, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles(theme => ({
  root: {
    gridArea: "card"
  },
  card: {
    display: "grid",
    height: "100%",
    width: "100%",
    gridTemplateColumns: "1fr 2fr 1fr",
    gridTemplateAreas: `
      ' avatar details time '
    `,
    "@media (max-width: 820px)": {
      gridTemplateColumns: "1fr 2fr"
    }
  },
  avatar: {
    gridArea: "avatar",
    justifyContent: "center",
    alignContent: "center"
  },
  details: {
    gridArea: "details",
    flexDirection: "column",
    justifyContent: "center",
    "@media (max-width: 820px)": {
      flex: 1
    }
  },
  time: {
    alignContent: "center",
    "@media (max-width: 820px)": {
      display: "none"
    }
  },
  image: {
    width: "70px",
    height: "70px"
  },
  name: {
    fontWeight: 600
  },
  message: {
    color: "#b9b8b8"
  },
  timestamp: {
    whiteSpace: "nowrap",
    paddingBottom: "10px"
  },
  buttonGroup: {
    padding: '10px 0'
  },
  button__send: {
    marginRight: '7px',
    background: '#3f51b5',
    color: 'white',
    "@media (max-width: 820px)": {
      padding: "3px",
      margin: "2px"
    }
  },
  button__delete: {
    marginRight: '7px',
    background: '#f50057',
    color: 'white',
    "@media (max-width: 820px)": {
      padding: "3px",
      margin: "2px"
    }
  },
}))

export default function InboxCard({handleDelete, friend, message}){
  let history = useHistory();
  const classes = useStyles();
  if (message) console.log('messageeeee', message);
  return (
    <div className={classes.root}>
        <Paper className={classes.card}>
          <Grid container className={classes.avatar}>
            <Avatar
              alt={friend.alias}
              src={friend.imageURL}
              className={classes.image}
            />
          </Grid>
          <Grid container className={classes.details}>
            <Typography variant="subtitle1" className={classes.name}>
	      {message.author.alias}
            </Typography>
            <Typography variant="body1" className={classes.message}>
	      {message.content}
            </Typography>
            <Grid container className={classes.buttonGroup}>
              <Button
                variant="contained"
                size="small"
	        onClick={() => history.push(`/chat/user/${friend._id}`)}
                classes={{root: classes.button__send}}
              >
                open
              </Button>
              <Button 
                variant="contained"
                size="small"
	        onClick={(e) => handleDelete(e, message.chatId)}
                classes={{root: classes.button__delete}}
              >
                Leave
                <ExitToAppIcon className={classes.rightIcon} />
              </Button>
            </Grid>
          </Grid>
          <Grid container className={classes.time}>
            <Typography variant="body1" className={classes.timestamp}>
	    { String(message.timestamp)}
            </Typography>
          </Grid>
        </Paper>
      </div>
  );
};
