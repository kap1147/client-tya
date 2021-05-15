import React from 'react'
// Components
import Navbar from '../navbar/Navbar.container';
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
export default function LandingPage() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Navbar />
            <div className={classes.body}><h3>Hello World!</h3> <p>We are busy at work and will be launching soon!</p><p>Thanks for visiting!</p></div>
            <footer />
        </div>
    )
}
