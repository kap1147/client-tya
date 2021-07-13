import React from 'react';
import { useSelector } from "react-redux";
// Components
import Navbar from '../navbar/Navbar.container';
import AddPostModal from '../AddPostModal.component';
import StickyFooter from '../StickyFooter.component';
import PostCard from '../PostCard.component';
// Mui stuff
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";
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

export default function LandingPage({isAuthenticated}) {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();
    const LandingPageMarkup = isAuthenticated ? <><AddPostModal /></> : null;
    let postMarkup = posts ? (
      posts.map((post) => (
        <Grid item xs={12} md={4} lg={3} key={post._id}>
          <PostCard post={post} key={post._id} />
        </Grid>
      ))) 
	: <p>...Loading posts!</p>;

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
	          {postMarkup}
                </div>
            </Container>
            <StickyFooter />
        </div>
    )
}
