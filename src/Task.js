
import React, { Component } from 'react';
import './Task.css';

class Task extends Component {
  constructor (props){
    super(props);
    this.state = props;
  }

  render() {
    return (
      <div className="Task">
        <p>{this.state.title}</p>
      </div>
    );
  }
}

Task.propTypes = {
  title: React.PropTypes.string.isRequired,
  state: React.PropTypes.string
};

Task.defaultProps = {
  state: 'todo'
};

export default Task;
