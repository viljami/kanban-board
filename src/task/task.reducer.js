
import { CREATE_TASK, UPDATE_TASK } from './task.action.types';

function task (state = {}, action = {}) {
  switch (action.type) {
    case CREATE_TASK:
      return {
        text: action.text || 'New Task',
        state: action.state || 'todo'
      };
    case UPDATE_TASK:
      if (state.id !== action.id) return state;
      if (! action.text && ! action.state) return state;
      const o = {};
      if (action.text) o.text = action.text;
      if (action.state) o.state = action.state;
      return Object.assign({}, state, o);
    default:
      return state;
  }
}

const tasks = (state, action = {}) => {
  switch (action.type) {
    case CREATE_TASK:
      if (! action.state) action.state = 'todo';
      return [...state, task(undefined, action)];
    case UPDATE_TASK:
      if (! action.state) action.state = 'todo';
      return state.map(o => task(o, action));
    default:
      return state;
  }
};

export default tasks;
