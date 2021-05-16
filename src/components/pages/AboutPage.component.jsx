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

export default function AboutPage() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Navbar />
            <div className={classes.body}>
                <h2>Who are we?</h2>
                <p>Here's a some detail on our great team!</p>
            </div>
            <footer />
        </div>
    )
}
