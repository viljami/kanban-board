
import React, { Component } from 'react';
import './AddTask.css';

class AddTask extends Component {
  constructor (props){
    super(props);
    this.addTask = this.addTask.bind(this);
  }

  addTask (){
    console.log('add', this.input.value);
    this.input.value = '';
  }

  render() {
    return (
      <div className="AddTask">
        <label htmlFor="task">Task:</label>
        <button onClick={this.addTask}>Add</button>
        <input
          id="task"
          type="text"
          ref={input => this.input = input}
          />
      </div>
    );
  }
}

export default AddTask;
