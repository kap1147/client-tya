import { useEffect, useState } from 'react';
import api from '../../api';
// Components
import Navbar from '../Navbar.component';
// MUI Stuff
import { Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flex: 1,
  },
  main: {
    paddingTop: '200px',
  },
}));

export default function ChatPage(props) {

  const [messages, setMessages] = useState([]);
  const [chatId, setChatId] = useState(null);
  const classes = useStyles();

  useEffect(async () => {
    let res = await api.getChatId({friendId: props.match.params.userId});
    if (res.status === 200 && res.data.chatId) {
      console.log(res.data)
    };
  },[]);

  return (
    <Grid container className={classes.root}>
	<Navbar />
	<main className={classes.main}>  
      	  <Typography variant='h4'>
            Chat Page {props.match.params.userId}
      	  </Typography>
	</main>
   </Grid>
  );
};
