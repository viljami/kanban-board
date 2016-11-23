
import React, { Component } from 'react';
import AddTask from './AddTask';
import Column from './Column';
import Task from './Task';
import './App.css';

class App extends Component {
  render() {
    const tasks = [
      {id:'11', title:'task 11', state:'todo'},
      {id:'12', title:'task 12', state:'todo'},
      {id:'13', title:'task 13', state:'todo'},
      {id:'21', title:'task 21', state:'inProgress'},
      {id:'22', title:'task 22', state:'inProgress'},
      {id:'31', title:'task 31', state:'done'},
      {id:'32', title:'task 32', state:'done'},
      {id:'33', title:'task 33', state:'done'}
    ];

    const columns = ['todo']
    .concat(tasks.map(a => a.state))
    .reduce((a, b) => a.find(c => c === b) ? a : a.concat(b), [])
    .reduce((a, b) => (a[b] = []) && a, {});

    columns['todo'].push(<AddTask />);

    tasks.forEach(a => columns[a.state].push(a));

    const createTask = a => <Task key={a.id} title={a.title} state={a.state} />;
    const kandbanHtml = Object.keys(columns)
    .map(a => <Column title={a} content={columns[a].map(createTask)} />);
    return (
      <div className="App">{kandbanHtml}</div>
    );
  }
}

export default App;
