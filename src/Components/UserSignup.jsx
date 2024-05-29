import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../services/api';

const UserSignup = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    const newUser = { username, password };
    const user = await createUser(newUser);
    console.log(user);
    setUser(user);
    nav('/dashboard');
  };

  return (
    <form onSubmit={handleSignup} className='center'>
      <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" required />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default UserSignup;
