import React from 'react'
// Components
import Navbar from '../navbar/Navbar.container';
import AddPostModal from '../AddPostModal.component';
import StickyFooter from '../StickyFooter.component';
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
export default function LandingPage(props) {
    const classes = useStyles();
	console.log(props)
    const LandingPageMarkup = props.user ? <AddPostModal  /> : null;
	console.log(LandingPageMarkup);
    return (
        <div className={classes.root}>
            <Navbar />
            <Container component="main" maxWidth="sm">
                <div className={classes.paper}>
                  <Typography component="h1" variant="h2">
                      Hello World!
                  </Typography>
                  <Typography component="p">
                      We are busy at work and will be launching soon!
                  </Typography>
                  <Typography component="p">
                      Thanks for visiting and come back soon!
                  </Typography>
	    	  {LandingPageMarkup}
                </div>
            </Container>
            <StickyFooter />
        </div>
    )
}
