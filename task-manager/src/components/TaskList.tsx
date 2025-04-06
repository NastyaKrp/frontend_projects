import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import TaskItem from './TaskItem';
import { List, Typography } from '@mui/material';

export default function TaskList(){

  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const completedTasks = tasks.filter(task => task.completed).length;
  const pendingTasks = tasks.length - completedTasks;

  return (
    <div>
      <Typography variant="h6">
        Completed Tasks: {completedTasks}
      </Typography>
      <Typography variant="h6">
        Pending Tasks: {pendingTasks}
      </Typography>
      <List>
        {tasks.map(task => (
          <TaskItem key={task.id} {...task} />
        ))}
      </List>
    </div>
  );
};

