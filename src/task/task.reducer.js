
import { CREATE_TASK, SET_TASKS, UPDATE_TASK } from './task.action.types';

const initialColumns = ['todo', 'inProgress', 'done'];
const initialState = {
 todo: [],
 inProgress: [],
 done: []
};

const spreadTasksToColumns = tasks => {
  const columns = initialColumns
  .concat(tasks.map(a => a.state))
  .reduce((a, b) => a.find(c => c === b) ? a : a.concat(b), [])
  .reduce((a, b) => (a[b] = []) && a, {});

  tasks.forEach(a => columns[a.state].push(a));
  return columns;
};

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

const tasks = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_TASKS:
      return spreadTasksToColumns(action.tasks);
    case CREATE_TASK:
      if (! action.state) action.state = 'todo';
      state[action.state].push(task(undefined, action));
      return state;
    case UPDATE_TASK:
      if (! action.state) action.state = 'todo';
      return state[action.state].map(o => task(o, action));
    default:
      return state;
  }
};

export default tasks;
