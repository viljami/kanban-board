
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AddTask from './AddTask';
import Column from './Column';
import Task from './task/Task';
import * as TaskActions from './task/task.actions';
import './App.css';

class App extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.tasks.length !== nextProps.tasks.length;
  }

  render() {
    console.log(this);

    const tasks = this.props.tasks;

    const columns = ['todo']
    .concat(tasks.map(a => a.state))
    .reduce((a, b) => a.find(c => c === b) ? a : a.concat(b), [])
    .reduce((a, b) => (a[b] = []) && a, {});

    columns['todo'].push(<AddTask key="addtask1" onAdd={this.props.actions.addTask} />);

    tasks.forEach(a => columns[a.state].push(a));

    const createTask = a => <Task key={a.id} text={a.text} state={a.state} />;
    const kandbanHtml = Object.keys(columns)
    .map((a, i) =>
      <Column key={"col" + i}
        title={a}
        content={columns[a].map(b => b.text ? createTask(b) : b)}
      />
    );
console.log(kandbanHtml[0].props.content);
    return (
      <div className="App">{kandbanHtml}</div>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TaskActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
