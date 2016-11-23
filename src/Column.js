
import React, { Component } from 'react';
import './Column.css';

class Column extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.content.length !== nextProps.content.length;
  }

  render() {
    return (
      <div className="Column">
        <p>{this.props.title}</p>
        {this.props.content}
      </div>
    );
  }
}

export default Column;
