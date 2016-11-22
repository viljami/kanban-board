
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
        <p>{this.state.isDone ? 'DONE' : ''}</p>
      </div>
    );
  }
}

export default Task;
