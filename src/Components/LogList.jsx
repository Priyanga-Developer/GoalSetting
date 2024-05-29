import React, { useEffect, useState } from 'react';
import { getLogs } from '../services/api';

const LogList = ({ userId }) => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      const allLogs = await getLogs();
      const userLogs = allLogs.filter(log => log.userId === userId);
      setLogs(userLogs);
    };
    fetchLogs();
  }, [userId]);

  return (
    <ul>
         <h3>Here is The log List</h3>
      {logs.map(log => (
        <li key={log.id}>
          Goal ID: {log.goalId}, Task ID: {log.taskId}, Date: {log.date}, Status: {log.status}, Hours: {log.hours}
        </li>
      ))}
    </ul>
  );
};

export default LogList;
