import React, { useEffect, useState } from 'react';
import { getTasks, updateTask, createLog } from '../services/api';
import TaskForm from './TaskForm';

const TaskList = ({ goalId, userId, onTaskCompleted }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const allTasks = await getTasks();
      const goalTasks = allTasks.filter(task => task.goalId === goalId);
      setTasks(goalTasks);
    };
    fetchTasks();
  }, [goalId]);

  const handleTaskCreated = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleTaskCompleted = async (taskId) => {
    const hours = prompt("Enter the number of hours you spent on this task:");
    if (hours !== null) {
      const taskToUpdate = tasks.find(task => task.id === taskId);
      await updateTask(taskId, { ...taskToUpdate, completed: true });
      const newLog = await createLog({
        goalId,
        taskId,
        date: new Date().toISOString(),
        status: 'Completed',
        hours,
        userId 
      });
      onTaskCompleted(newLog);
      setTasks(tasks.filter(task => task.id !== taskId));
    }
  };

  return (
    <div>
      <TaskForm goalId={goalId} onTaskCreated={handleTaskCreated} />
      <h3>Here is The Task List</h3>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.title}: {task.description} ({task.quantity} - {task.frequency})
            <ul>
              {task.reminders.map((reminder, index) => (
                <li key={index}>
                  Time: {reminder.time}, Auto Suggest: {reminder.autoSuggest.toString()}
                </li>
              ))}
            </ul>
            <p className='checkbox'>Status</p>
            <input 
              type="checkbox" 
              className='checkbox'
              onChange={() => handleTaskCompleted(task.id)} 
            /> Complete
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
