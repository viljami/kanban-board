
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
        <input
          type="text"
          ref={input => this.input = input}
          />
        <button onClick={this.addTask}>Add</button>
        <div className="clearfix"></div>
      </div>
    );
  }
}

export default AddTask;
