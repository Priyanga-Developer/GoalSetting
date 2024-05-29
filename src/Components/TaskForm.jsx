import React, { useState } from 'react';
import { createTask } from '../services/api';

const TaskForm = ({ goalId, onTaskCreated }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [frequency, setFrequency] = useState('once a day');
  const [reminders, setReminders] = useState([{ time: '07:00', autoSuggest: true }]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTask = { goalId, title, description, quantity, frequency, reminders };
    const task = await createTask(newTask);
    onTaskCreated(task);
    setTitle('');
    setDescription('');
    setQuantity(1);
    setFrequency('once a day');
    setReminders([{ time: '07:00', autoSuggest: true }]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <input
        type="text"
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <input
        type="number"
        value={quantity}
        onChange={e => setQuantity(e.target.value)}
        placeholder="Quantity"
        required
      />
      <input
        type="text"
        value={frequency}
        onChange={e => setFrequency(e.target.value)}
        placeholder="Frequency"
        required
      />
      <button type="submit">Create Task</button>
    </form>
  );
};

export default TaskForm;
