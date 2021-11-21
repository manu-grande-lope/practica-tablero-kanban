
import './App.css';
import Header from './components/header/index';
import React, { Fragment, useEffect } from 'react'
import TaskList from './components/task-list'

function App() {
  const handleFiltro = (e) => {
    let texto = '';
    try {
      texto = e.target.value;

      return texto;
    } catch (error) {
      texto = '';

      return texto;
    }

  }




  return (
    <Fragment>
      <Header></Header>

      <div>
        <input className="searchBar__style" type="text" placeholder="Search a task" onChange={handleFiltro}></input>

      </div>

      <div className="main__container">
        <TaskList title="To do" texto={handleFiltro()}></TaskList>
        <TaskList title="In progress" texto={handleFiltro()}></TaskList>
        <TaskList title="Done" texto={handleFiltro()} remove="CLEAR ALL 🗑️"></TaskList>
      </div>
    </Fragment>

  );
}

export default App;
