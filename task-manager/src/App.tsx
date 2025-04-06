import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';
import { HeaderComponent } from './components/Header';



function App() {

  return (
    <div>
      <HeaderComponent></HeaderComponent>
    <Provider store={store}>
      <div className="container">
        <AddTaskForm />
        <TaskList />
      </div>
    </Provider>
    </div>
  );
}

export default App;
