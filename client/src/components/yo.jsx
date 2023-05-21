import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <img src="logo.png" alt="Logo" />
      <h1>Welcome to Our Website</h1>
      <p>Help us combat hunger by making a donation.</p>
      <Link to="/donate">
        <button>Donate</button>
      </Link>
    </div>
  );
};

export default Home;
