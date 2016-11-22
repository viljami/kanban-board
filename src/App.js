
import React, { Component } from 'react';
import AddTask from './AddTask';
import Column from './Column';
import Task from './Task';
import './App.css';

class App extends Component {
  render() {
    const rows = [
      <AddTask key="addTask"/>,
      <Task key="1" title="first task" />,
      <Task key="2" title="task 2" />,
      <Task key="3" title="task 3" />
    ];

    return (
      <div className="App">
        <Column content={rows} title="Todo"/>
        <Column content={[]} title="InProgress"/>
        <Column content={[]} title="Done"/>
      </div>
    );
  }
}

export default App;
