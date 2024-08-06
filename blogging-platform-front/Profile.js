import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = ({ match }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`/api/users/${match.params.id}`);
      setUser(response.data);
    };
    fetchUser();
  }, [match.params.id]);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h2>{user.username}</h2>
      <p>{user.email}</p>
    </div>
  );
};

export default Profile;
