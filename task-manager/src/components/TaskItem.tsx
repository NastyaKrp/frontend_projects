import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from '../redux/taskSlice';
import { Checkbox, IconButton, ListItem, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

interface TaskItemProps {
  id: number;
  name: string;
  completed: boolean;
}

export default function TaskItem({ id, name, completed }: TaskItemProps){
  const dispatch = useDispatch();

  return (
    <ListItem className='list-item'>
      <Checkbox 
        checked={completed}
        onChange={() => dispatch(toggleTask(id))}
      />
      <ListItemText primary={name} style={{ textDecoration: completed ? 'line-through' : 'none' }} />
      <IconButton onClick={() => dispatch(deleteTask(id))}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};
