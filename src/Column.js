
import React, { Component, PropTypes } from 'react';
import { DropTarget } from 'react-dnd';
import AddTask from './AddTask';
import Task from './task/Task';
import './Column.css';


const createTask = a => (
  <Task id={a.id} key={a.id} text={a.text} state={a.state} />
);

const columnTarget = {
  canDrop(column, monitor) {
    return column.title !== monitor.getItem().source;
  },

  drop(props, monitor) {
    const task = monitor.getItem().task;
    props.dropAction(task.id, task.text, props.title);
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
    draggedTask: monitor.getItem()
  };
}

class Column extends Component {
  render() {
    const {connectDropTarget, tasks, addTask} = this.props;

    return connectDropTarget(
      <div className="Column">
        <p>{this.props.title}</p>
        {this.props.addTask ? <AddTask onAdd={addTask}/> : ''}
        {tasks.map(createTask)}
      </div>
    );
  }
}

Column.propTypes = {
  addTask: PropTypes.any,
  dropAction: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default DropTarget('TASK', columnTarget, collect)(Column);
