import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import './PostList.css';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get('/posts');
        setPosts(response.data);
      } catch (error) {
        setError('Error fetching posts');
      }
    };

    fetchPosts();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (posts.length === 0) {
    return <div>No posts available</div>;
  }

  return (
    <div className="post-list-container">
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            <Link to={`/posts/${post._id}`}>
              <h3>{post.title}</h3>
              <p>{post.content.substring(0, 100)}...</p>
              <p><strong>Author:</strong> {post.author ? post.author.name : 'Unknown'}</p>
              <p><strong>Created At:</strong> {new Date(post.createdAt).toLocaleString()}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
