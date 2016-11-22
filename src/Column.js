
import React, { Component } from 'react';
import './Column.css';

class Column extends Component {
  constructor (props){
    super(props);
    this.state = props;
  }

  render() {
    return (
      <div className="Column">
        <p>{this.state.title}</p>
        {this.state.content}
      </div>
    );
  }
}

export default Column;
