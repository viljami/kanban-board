
import React, { PureComponent } from 'react';
import { DragSource } from 'react-dnd';
import './Task.css';

const taskSource = {
  beginDrag(task) {
    return {task: task, source: task.state};
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

class Task extends PureComponent {
  render() {
    const { connectDragSource, isDragging } = this.props;
    return connectDragSource(
      <div className={'Task' + (isDragging ? ' isDragging' : '')}>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

Task.propTypes = {
  id: React.PropTypes.number.isRequired,
  text: React.PropTypes.string.isRequired,
  state: React.PropTypes.string
};

Task.defaultProps = {
  state: 'todo'
};

export default DragSource('TASK', taskSource, collect)(Task);
