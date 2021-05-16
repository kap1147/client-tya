import React from 'react'
import Navbar from '../navbar/Navbar.container'
// Redux
import { useSelector } from "react-redux";
// Mui stuff
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  body: {
      padding: '0 350px 0 350px',
      textAlign: 'center',
  },
}));

export default function ProfilePage() {
    const {user} = useSelector((state) => state.user);
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Navbar />
            <div className={classes.body}>
                <h2>Profile Page</h2>
                <p>Welcome {user.alias}!</p>
            </div>
        </div>
    )
}
