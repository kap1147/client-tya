import React, { useEffect, useState } from "react";
import Axios from "axios";

//Components
import PostDetail from "./post-detail.component";
import Post from '../post/Post.jsx';

export default function PostDetailContainer(props) {
  const [post, setPost] = useState({});

  useEffect(() => {
    async function fetchPost() {
      const results = await Axios.get(`http://localhost:3001/api/posts/${props.match.params.postId}`);
      const data = results.data;
      console.log(data);
      setPost(data);
    }
    fetchPost();
  }, [props.match.params.postId]);
  const postMarkup = post ? <Post post={post} /> : <p>Loading...</p>;
  return postMarkup;
}
