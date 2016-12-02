
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import AddTask from './AddTask';
import Column from './Column';
import Task from './task/Task';
import * as TaskActions from './task/task.actions';
import './App.css';

const createTask = a => (
  <Task id={a.id} key={a.id} text={a.text} state={a.state} />
);

const createElements = props => {
  const state = props.state;
  const columnNames = Object.keys(state);
  const columns = Object.keys(state)
  .reduce((a, b) => (a[b] = []) && a, {});

  columns['todo'].push(
    <AddTask
      key="addtask1"
      onAdd={props.actions.addTask}
    />
  );

  return columnNames
  .map((a, i) =>
    <Column
      key={"col" + i}
      title={a}
      dropAction={props.actions.updateTask}
    >
      {state[a].map(b => b.text ? createTask(b) : b)}
    </Column>
  );
}


class App extends Component {
  render() {
    return (
      <div className="App">{createElements(this.props)}</div>
    );
  }
}

const mapStateToProps = state => ({
  state: state.tasks
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TaskActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DragDropContext(HTML5Backend)(App));
