import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';
import './PostDetailPage.css';

const PostDetailPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await api.get(`/posts/${id}`);
        setPost(response.data);
      } catch (error) {
        setError('Error fetching post details');
      }
    };

    fetchPost();
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="post-detail-container">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p><strong>Author:</strong> {post.author ? post.author.name : 'Unknown'}</p>
      <p><strong>Created At:</strong> {new Date(post.createdAt).toLocaleString()}</p>
    </div>
  );
};

export default PostDetailPage;
