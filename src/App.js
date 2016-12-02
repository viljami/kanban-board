
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Column from './Column';
import * as TaskActions from './task/task.actions';
import './App.css';


const createElements = props => {
  const state = props.state;
  const columnNames = Object.keys(state);

  return columnNames
  .map((a, i) =>
    <Column
      tasks={state[a]}
      key={"col" + i}
      title={a}
      dropAction={props.actions.updateTask}
      addTask={i === 0 ? props.actions.addTask : undefined}
    />
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
