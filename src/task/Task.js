
import React, { PureComponent } from 'react';
import './Task.css';

class Task extends PureComponent {
  constructor (props){
    super(props);
    this.state = props;
  }

  render() {
    return (
      <div className="Task">
        <p>{this.state.text}</p>
      </div>
    );
  }
}

Task.propTypes = {
  text: React.PropTypes.string.isRequired,
  state: React.PropTypes.string
};

Task.defaultProps = {
  state: 'todo'
};

export default Task;
