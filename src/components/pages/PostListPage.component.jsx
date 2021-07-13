import { useEffect, useState } from 'react';
import api from '../../api';
// Components
import Navbar from '../navbar/Navbar.container';
import DisplayPost from '../DisplayPost.component';
// Mui stuff
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    maxWidth: '900px',
  },
}));


export default function PostListPage () {
  const [ posts, setPosts ] = useState(null);
  const classes = useStyles();

  useEffect( async () => {
    try {
      var res = await api.getPosts();
      if (res.data.posts) {
        setPosts(res.data.posts);
      };
    } catch(err) {
      console.log(err);
    };
  }, []);
  
  const pageMarkup = posts 
		? posts.map(post => <DisplayPost post={post} />)
	        : <p>Loading post!!!</p>
  return (
    <div className={classes.root}>
      <Navbar />
      <Container className={classes.container} component="main" maxWidth="sm">
        { pageMarkup }
      </Container>
    </div>
  );
};
