import React, { useEffect, useState } from "react";
import Axios from "axios";
//Components
import PostDetail from "./post-detail.component";
import Post from './Post.component.jsx';
import Navbar from '../../navbar/Navbar.container';
// MUI Stuff
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  posts: {
    paddingTop: '100px',
  },
}));

export default function PostDetailContainer(props) {
  const [post, setPost] = useState({});
  const classes = useStyles();
  useEffect(() => {
    async function fetchPost() {
      const results = await Axios.get(`https://theyardapp.com/api/posts/${props.match.params.postId}`);
      const data = results.data;
      console.log(data);
      setPost(data);
    }
    fetchPost();
  }, [props.match.params.postId]);
  const postMarkup = post ? <Post className={classes.posts} post={post} /> : <p>Loading...</p>;
  return (
    <div>
      <Navbar />
      {postMarkup}
    </div>
  );
}
