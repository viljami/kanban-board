
import React, { Component, PropTypes } from 'react';
import { DropTarget } from 'react-dnd';
import './Column.css';

const columnTarget = {
  canDrop(column, monitor) {
    return column.title !== monitor.getItem().source;
  },

  drop(props, monitor) {
    props.dropAction(monitor.getItem().taskId, undefined, props.title);
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
  shouldComponentUpdate(nextProps) {
    return this.props.children.length !== nextProps.children.length;
  }

  render() {
    const {connectDropTarget} = this.props;

    return connectDropTarget(
      <div className="Column">
        <p>{this.props.title}</p>
        {this.props.children}
      </div>
    );
  }
}

Column.propTypes = {
  title: PropTypes.string.isRequired,
  dropAction: PropTypes.func.isRequired,
  draggedTask: PropTypes.object
};

export default DropTarget('TASK', columnTarget, collect)(Column);
