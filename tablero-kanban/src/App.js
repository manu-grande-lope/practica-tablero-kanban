
import './App.css';
import Header from './components/header/index';
import React, { Fragment } from 'react'
import TaskList from './components/task-list'

function App() {
  return (
    <Fragment>
    <Header></Header>
    <div className="main__container">
      <TaskList title="To do"></TaskList>
      <TaskList title="In progress"></TaskList>
      <TaskList title="Done" remove="Clear All"></TaskList>
    </div>
  </Fragment>
    
  );
}

export default App;
