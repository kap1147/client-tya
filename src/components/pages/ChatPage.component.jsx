import { useEffect, useRef, useState } from 'react';
import dayjs from 'dayjs';
import  localizedFormat from 'dayjs/plugin/localizedFormat';
import api from '../../api';
// Redux
import { useSelector } from "react-redux";
// Components
import Navbar from '../Navbar.component';
// MUI Stuff
import { Avatar, Button, Grid, makeStyles, TextField, Typography } from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function ScrollToBottom(){
  const elementRef = useRef();
  useEffect(() => elementRef.current.scrollIntoView());
  return <div ref={elementRef} />;
};

const useStyles = makeStyles(theme => ({
  root: {
    flex: 1,
  },
  main1: {
    paddingTop: '200px',
    display: 'grid',
    gridTemplateColumns: '[first] 25% [col2] 50% [col3] 25% [end]',
    gridTemplateRows: '[first] 100% [end]',
    gridTemplateAreas: `'. main .'`,
  },
  main: {
    paddingTop: '200px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  },
  container: {
    gridArea: 'main'
  },
  messages: {
    display: 'flex',
    flexDirection: 'column-reverse'
  },
  chat: {
    width: "600px",
    fontFamily: "helvetica"
  },
  body: {
    height: '600px',
    overflowY: 'auto',
    "&::-webkit-scrollbar":{
      display: 'none'
    }
  },
  friend: {
    width: "400px",
    paddingBottom: '5px',
  },
  friend__wrapper: {
    display: "flex",
    alignItems: "center"
  },
  friend__col1: {
    flexBasis: "15%"
  },
  friend__col2: {
    background: '#999',
    padding: '15px 5px',
    borderRadius: '20px',
    borderBottomLeftRadius: '0px'
  },
  friend__col3: {
    flexBasis: "35%",
    paddingLeft: "20px"
  },
  user: {
    display: "flex",
    flexDirection: "row-reverse",
    paddingBottom: '5px',
  },
  user__wrapper: {
    display: "flex",
    alignItems: "center"
  },
  user__col1: {
    paddingRight: "20px"
  },
  user__col2: {
    background: 'linear-gradient(to bottom, #00D0EA 0%, #0085D1 100%)',
    padding: '15px 5px',
    borderRadius: '20px',
    borderBottomRightRadius: '0px'
  },
  time: {
    fontSize: ".75rem",
    color: '#ababab',
  },
  icon: {
    color: 'green'
  },
}));

export default function ChatPage(props) {
  
  const {socket} = useSelector((state) => state.socket);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [isViewing, setIsViewing] = useState([]);
  const [chatId, setChatId] = useState(null);
  const [userId, setUserId] = useState(null);
  const [friend, setFriend] = useState(null);
  const classes = useStyles();

  dayjs.extend(localizedFormat);

  if (friend) console.log(friend);

  function handleSubmit(event) {
    event.preventDefault();
    if (socket && chatId) {
      socket.emit('submitNewMessage', ({content: message, chatId: chatId}));
      setMessage('');
    };
  };

  useEffect(async () => {
    let res = await api.getChatId({friendId: props.match.params.userId});
    if (res.status === 200 && res.data.chatId) {
      setChatId(res.data.chatId);
      setUserId(res.data.userId);
      setFriend(res.data.profiles.filter(user => user._id === props.match.params.userId)[0]);
    };
  },[]);

  useEffect(() => {
    if (chatId && socket && userId) {
      socket.emit('joinChat', chatId);
      socket.on('allMessages', (allMessages) => {
        setMessages([...allMessages]);
      });
      socket.on('newMessage', (newMessage) => {
        console.log('received message!');
        setMessages((prev) => [...prev, newMessage])
      });
      socket.on('isViewing', viewers => {
        let list = viewers.filter(viewer => viewer !== userId);
        setIsViewing(list);
      });
      return () => {
        socket.emit('leaveChat', chatId)
      };
    };
  }, [chatId, socket, userId]);

  return (
    <Grid container className={classes.root}>
	<Navbar />
	<main className={classes.main}>
	  <Grid className={classes.container}>
	    <div className={classes.chat}>
              <div className={classes.header}>
                <Typography variant="h4">Welcome, you're chatting with {friend &&  <>{friend.alias}. </> }{isViewing.length !== 0 && <><FiberManualRecordIcon className={classes.icon} /> Viewing</>}</Typography>
              </div>
              <div className={classes.body}>
                {messages.length !== 0 && messages.map(message => {
                  if (message.author._id === userId){  
                      return <div className={classes.user}>
                         <div className={classes.user__wrapper}>
                           <div className={classes.user__col1}>
                             <Typography className={classes.time} variant="body3">
			       {dayjs(message.timestamp).format('L LT')}
                             </Typography>
                           </div>
                           <div className={classes.user__col2}>
                             <Typography variant="body3">
                               {message.content}
                             </Typography>
                           </div>
                         </div>
                       </div>
                    } else { return  <div className={classes.friend}>
                         <div className={classes.friend__wrapper}>
                           <div className={classes.friend__col1}>
                             <Avatar
                               alt={message.author.alias}
                               src={message.author.imageURL}
                             />
                           </div>
                           <div className={classes.friend__col2}>
                             <Typography variant="body3">
                               {message.content}
                             </Typography>
                           </div>
                           <div className={classes.friend__col3}>
                             <Typography className={classes.time} variant="body3">
			       {dayjs(message.timestamp).format('L LT')}
                             </Typography>
                           </div>
                         </div>
			 { (messages.length > 11) && <ScrollToBottom />}
                       </div>
                }})}
         
          </div>
          
        <div className={classes.footer}>
          <TextField
            onChange={(event) => setMessage(event.target.value)}
            id="input"
            name="message"
            label="Chat"
            multiline
            value={message}
            variant="outlined"
          />
          <Button onClick={handleSubmit} type="submit">Submit</Button>
        </div>
      </div>
	  </Grid>      	  
	</main>
   </Grid>
  );
};
