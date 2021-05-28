import React from 'react';
// Components
import MakeOfferModal from './MakeOfferModal.component';
// Mui stuff
import {  makeStyles } from "@material-ui/core/styles";
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      border: 'solid',
      borderWidth: 'thin',
      borderRadius: '15px',
      borderColor: '#66bb6a',
      width: '300px',
      top: '450px',
      right: '100px',
      position: 'absolute',
      backgroundColor: 'white',
      zIndex: '999'
    },
    root: {
        padding: '10px'
    },
    avatarWrapper: {
        display: 'flex',

    },
    userDetails: {
        padding: '10px 0 0 10px',
        display: 'flex',
        flexDirection: 'column',
    },
    avatar: {      
        width: theme.spacing(7),
        height: theme.spacing(7),
    },  
    buttons: {
        display: 'flex',
        flexDirection: 'column',
    }
}));

const Profile = ({user}) => {
    const classes = useStyles();
    const [state, setState] = React.useState({modalOpen: false})
    function handleModalClick(){
        setState({modalOpen: true})
    }

    const profileMarkup = user 
        ? <div className={classes.wrapper}>
            <div className={classes.root}>
                <div className={classes.avatarWrapper}>
                    <Avatar className={classes.avatar} src={user.avatar} alt={user.username} />
                    <div className={classes.userDetails}>
                        <div className={classes.username}><Typography variant='h6'>{user.username}</Typography></div>
                        <div className={classes.ratings}>5.0</div>
                    </div>
                </div>
                
                <div className={classes.buttons}>
                    <MakeOfferModal />
                    <Button color="secondary"fullWidth variant='contained'>Send Message</Button>
                </div>
            </div>
        </div> 
        : <p>...loading profile</p>

    return profileMarkup;
}

export default Profile;
