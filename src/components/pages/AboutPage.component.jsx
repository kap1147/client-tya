import React from 'react'
// Components
import Navbar from '../navbar/Navbar.container';
// Mui stuff
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export default function AboutPage() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Navbar />
            <Container component="main" maxWidth="sm">
                <div className={classes.paper}>
                <Typography component="h1" variant="h2">
                    Who are we?
                </Typography>
                <Typography component="p">
                    Here's a some details on our great team!
                </Typography>
                </div>
            </Container>
            <footer />
        </div>
    )
}
