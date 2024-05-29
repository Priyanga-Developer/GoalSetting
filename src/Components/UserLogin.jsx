import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUsers } from '../services/api';

const UserLogin = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const users = await getUsers();
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
      setUser(user);
      nav('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <form onSubmit={handleLogin} className='center'>
      <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" required />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  );
};

export default UserLogin;
