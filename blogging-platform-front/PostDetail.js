import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PostDetail = ({ match }) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await axios.get(`/api/posts/${match.params.id}`);
      setPost(response.data);
    };
    fetchPost();
  }, [match.params.id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
};

export default PostDetail;
