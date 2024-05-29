import React, { useState } from 'react';
import { createGoal } from '../services/api';

const GoalForm = ({ userId, onGoalCreated }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [minTimeline, setMinTimeline] = useState('');
  const [maxTimeline, setMaxTimeline] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newGoal = { userId, title, description, minTimeline, maxTimeline, tasks: [] };
    const goal = await createGoal(newGoal);
    onGoalCreated(goal);
  };

  return (
    <>
    <h2>Create Goal Here</h2>
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required />
      <input type="text" value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" required />
      <input type="date" value={minTimeline} onChange={e => setMinTimeline(e.target.value)} required />
      <input type="date" value={maxTimeline} onChange={e => setMaxTimeline(e.target.value)} required />
      <button type="submit">Create Goal</button>
    </form>
    </>
  );
};

export default GoalForm;
