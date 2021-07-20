import { useEffect, useState } from 'react';
// Redux
import { useSelector } from "react-redux";
// Components
import InboxCard from '../InboxCard.component.jsx';
import Navbar from '../Navbar.component';
// Mui stuff
import { Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    display: "grid",
    height: "100vh",
    gridTemplateColumns: "1fr 2fr 1fr",
    gridTemplateRows: "150px 100px 125px",
    gridTemplateAreas: `
      ' navbar navbar navbar'
      ' . header . '
      ' . cardReel . '
    `,
    "@media (max-width: 820px)": {
      gridTemplateAreas: `
        ' header header header'
        ' cardReel cardReel cardReel'
      `
    }
  },
  navbar: {
    gridArea: 'navbar',
  },
  header: {
    gridArea: "header",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  cardReel: {
    gridArea: 'cardReel',
    flexDirection: 'column',
    "& > *": {
      paddingBottom: '25px'
    }
  },
}));

export default function InboxPage(){

  const classes = useStyles();
  const {socket} = useSelector((state) => state.socket);
  const {user: {_id}} = useSelector((state) => state.user);
  const [chats, setChats] = useState([]);

  async function handleDelete(event, id){
    console.log('handleDelete clicked! ', id);
    if (socket) {
      socket.emit('removeChat', id);
      setChats(chats.filter(chat => chat._id !== id));
    };
  };

  useEffect(() => {
    if (socket) {
      socket.emit('getChats');
      socket.on('allChats', incomingChats => {
	console.log('incoming chats! ', incomingChats)
        setChats(incomingChats);
      });
    };
  }, [socket]);

  return (
    <Grid className={classes.root}>
      <Navbar className={classes.navbar}/>
      <Grid className={classes.header}>
        <Typography variant="h4">Inbox</Typography>
      </Grid>
      <Grid className={classes.cardReel}>
        {chats.length !== 0 && chats.map(chat => {
	  let friend = chat.subscribers.filter(user => user._id !== _id);
	  return <InboxCard handleDelete={handleDelete} friend={friend[0]} message={chat.messages[0]}/>
	})}
      </Grid>
    </Grid>
  );
};
