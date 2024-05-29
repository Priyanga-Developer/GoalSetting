import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const api = axios.create({
  baseURL: API_URL
});

// User APIs
export const getUsers = async () => {
  const response = await api.get('/users');
  return response.data;
};

export const getUserById = async (id) => {
  const response = await api.get(`/users/${id}`);
  return response.data;
};

export const createUser = async (user) => {
    try {
      const response = await api.post('/users', user);
      return response.data;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error; 
    }
  };
  

export const updateUser = async (id, user) => {
  const response = await api.put(`/users/${id}`, user);
  return response.data;
};

export const deleteUser = async (id) => {
  const response = await api.delete(`/users/${id}`);
  return response.data;
};

// Goal APIs
export const getGoals = async () => {
  const response = await api.get('/goals');
  return response.data;
};

export const getGoalById = async (id) => {
  const response = await api.get(`/goals/${id}`);
  return response.data;
};

export const createGoal = async (goal) => {
  const response = await api.post('/goals', goal);
  return response.data;
};

export const updateGoal = async (id, goal) => {
  const response = await api.put(`/goals/${id}`, goal);
  return response.data;
};

export const deleteGoal = async (id) => {
  const response = await api.delete(`/goals/${id}`);
  return response.data;
};

// Task APIs
export const getTasks = async () => {
  const response = await api.get('/tasks');
  return response.data;
};

export const createTask = async (task) => {
  const response = await api.post('/tasks', task);
  return response.data;
};



export const updateTask = async (id, task) => {
  try {
    const response = await api.put(`/tasks/${id}`, task);
    return response.data;
  } catch (error) {
    console.error('Error updating task:', error);
    throw error; // Re-throw the error so the calling function can handle it
  }
};



export const deleteTask = async (id) => {
  const response = await api.delete(`/tasks/${id}`);
  return response.data;
};

// Log APIs


export const createLog = async (log) => {
  const response = await api.post('/logs', log);
  return response.data;
};

export const getLogs = async () => {
  const response = await api.get('/logs');
  return response.data;
};

export default api;
