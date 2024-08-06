import React from 'react';
import { useNavigate } from 'react-router-dom';
import PostList from '../components/Posts/PostList';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const userName = localStorage.getItem('userName');

  const handleProfile = () => {
    navigate('/profile');
  };

  const handleCreatePost = () => {
    navigate('/create');
  };

  return (
    <div>
      <div className="top-left">
        {userName && (
          <button onClick={handleCreatePost} className="create-post-button">
            Create Post
          </button>
        )}
      </div>
      <div className="top-right">
        {userName ? (
          <>
            <span className="user-name">{userName}</span>
            <button onClick={handleProfile} className="profile-button">
              Profile
            </button>
          </>
        ) : (
          <button onClick={handleProfile} className="profile-button">
            Profile
          </button>
        )}
      </div>
      <div className="home-container">
        <div className="center-content">
          <h1>Welcome to the Blogging Platform</h1>
        </div>
        <PostList />
      </div>
    </div>
  );
};

export default Home;
