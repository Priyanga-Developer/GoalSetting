import React, { useState } from 'react';
import GoalList from '../Components/GoalList';
import LogList from '../Components/LogList';

const Dashboard = ({ user, onLogout }) => {
  const [logs, setLogs] = useState([]);

  if (!user) {
    return <div>Please log in</div>;
  }

  const handleTaskCompleted = (newLog) => {
    setLogs([...logs, newLog]);
  };

  return (
    <div>
      <div className='heading'>
      <h1>Dashboard</h1>
      <button onClick={onLogout}>Log Out</button>
      </div>
      <GoalList userId={user.id} onTaskCompleted={handleTaskCompleted} />
      <LogList userId={user.id} logs={logs} />
    </div>
  );
};

export default Dashboard;
