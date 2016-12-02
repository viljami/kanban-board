
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Column from './column/Column';
import * as TaskActions from './task/task.actions';
import './App.css';


const createColumns = props => {
  const columns = props.columns;
  const columnNames = Object.keys(columns);

  return columnNames
  .map((a, i) =>
    <Column
      key={"col" + i}
      addTask={i === 0 ? props.actions.addTask : undefined}
      dropAction={props.actions.updateTask}
      tasks={columns[a]}
      title={a}
    />
  );
}


class App extends Component {
  render() {
    return (
      <div className="App">{createColumns(this.props)}</div>
    );
  }
}

const mapStateToProps = state => ({
  columns: state.columns
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TaskActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DragDropContext(HTML5Backend)(App));
