import React, { useEffect, useState } from "react";
import Axios from "axios";
//Components
import PostDetail from "./post-detail.component";
import Post from './Post.component.jsx';
import Navbar from '../../navbar/Navbar.container';

export default function PostDetailContainer(props) {
  const [post, setPost] = useState({});

  useEffect(() => {
    async function fetchPost() {
      const results = await Axios.get(`https://theyardapp.com/api/posts/${props.match.params.postId}`);
      const data = results.data;
      console.log(data);
      setPost(data);
    }
    fetchPost();
  }, [props.match.params.postId]);
  const postMarkup = post ? <Post post={post} /> : <p>Loading...</p>;
  return (
    <div>
      <Navbar />
      {postMarkup}
    </div>
  );
}
