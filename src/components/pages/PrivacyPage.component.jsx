import React from 'react'
import {html} from '../../utils/privacy-policy.html.js'
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

export default function PrivacyPage() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Navbar />
            <div className={classes.body}>
                {html}
            </div>
        </div>
    )
}
