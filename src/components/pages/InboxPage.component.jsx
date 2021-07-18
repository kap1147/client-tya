import { useEffect, useState } from 'react';
// Redux
import { useSelector } from "react-redux";
// Components
import Navbar from '../Navbar.component';
// Mui stuff
import { Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flex: 1,
  },
  main: {
    marginTop: '150px',
  },
  inbox: {
    justifyItems: 'center',
  },
  inbox__body: {
    alignContent: 'center',
    flexDirection: 'column'
  },
}));

export default function InboxPage(){

  const classes = useStyles();
  const {socket} = useSelector((state) => state.socket);
  const [chats, setChats] = useState([]);

  useEffect(() => {
    if (socket) {
      socket.emit('getChats');
      socket.on('allChats', incomingChats => {
	console.log('incoming chats! ', incomingChats)
        setChats(incomingChats);
      });
    };
  }, [socket]);

  if (chats) console.log(chats);

  return (
    <Grid container className={classes.root}>
      <Navbar />
      <Grid item container className={classes.main}>
        <Grid item container className={classes.inbox}>
          <Typography className={classes.inbox__header} varaint="h4">
            Inbox
	  </Typography>
	  <Grid item container className={classes.inbox__body}>
	    {(chats.length !== 0) && chats.map(chat => {
              return (
                <Grid item className={classes.chat}>
                  <Typography>
                    Chat Id: {chat._id}
		  </Typography>
		</Grid>
	      );
	    })}
	  </Grid>
	</Grid>
      </Grid>
    </Grid>
  );
};
