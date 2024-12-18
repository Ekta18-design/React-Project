import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ user, onLogout }) => {
  return (
    <div>
      <h2>Welcome, {user}</h2>
      <Link to="/login" onClick={onLogout}>Logout</Link>
    </div>
  );
};

export default Home;
