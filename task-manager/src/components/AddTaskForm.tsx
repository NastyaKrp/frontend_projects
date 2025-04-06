import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/taskSlice';
import { Button, TextField } from '@mui/material';

export default function AddTaskForm(){
  const [taskName, setTaskName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskName.trim()) {
      dispatch(addTask(taskName));
      setTaskName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField 
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        label="New Task"
        variant="outlined"
      />
      <Button type="submit" variant="contained" color="primary">
        Add Task
      </Button>
    </form>
  );
};
