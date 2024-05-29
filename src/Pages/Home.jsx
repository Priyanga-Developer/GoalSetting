import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='center'>
      <h1>Welcome to the Goal Tracking App</h1>
      <Link to="/login"><button>Login</button></Link>
      <br />
      <Link to="/signup"><button>Sign Up</button></Link>
    </div>
  );
};

export default Home;
