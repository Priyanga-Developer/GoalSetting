import React, { useEffect, useState } from 'react';
import { getGoals } from '../services/api';
import GoalForm from './GoalForm';
import TaskList from './TaskList';

const GoalList = ({ userId, onTaskCompleted }) => {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    const fetchGoals = async () => {
      const allGoals = await getGoals();
      const userGoals = allGoals.filter(goal => goal.userId === userId);
      setGoals(userGoals);
    };
    fetchGoals();
  }, [userId]);

  const handleGoalCreated = (newGoal) => {
    setGoals([...goals, newGoal]);
  };

  return (
    <div  >
      <div className='goalListheader'>

      <GoalForm userId={userId} onGoalCreated={handleGoalCreated} />
      </div>
      <h3>Here is The Goal List</h3>
      <ul className='goalList'>
        {goals.map(goal => (
          <li key={goal.id}>
            {goal.title}: {goal.description} ({goal.minTimeline} - {goal.maxTimeline})
            <TaskList goalId={goal.id} userId={userId} onTaskCompleted={onTaskCompleted} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GoalList;
