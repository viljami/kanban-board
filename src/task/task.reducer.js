
import { CREATE_TASK, SET_TASKS, UPDATE_TASK } from './task.action.types';

const initialState = [];

function task (state = {}, action = {}) {
  switch (action.type) {
    case CREATE_TASK:
      return {
        text: action.text || 'New Task',
        state: action.state || 'todo'
      };
    case UPDATE_TASK:
      if (state.id !== action.id) return state;
      const o = {};
      if (action.text) o.text = action.text;
      if (action.state) o.state = action.state;
      return Object.assign({}, state, o);
    default:
      return state;
  }
}

const tasks = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_TASKS:
      return action.tasks;
    case CREATE_TASK:
      return [...state, task(undefined, action)];
    case UPDATE_TASK:
      return state.map(o => task(o, action));
    default:
      return state;
  }
};

export default tasks;
