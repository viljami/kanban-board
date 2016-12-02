
import { CREATE_TASK, SET_TASKS, UPDATE_TASK } from '../task/task.action.types';
import tasks from '../task/task.reducer';

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

const columns = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_TASKS:
      return spreadTasksToColumns(action.tasks);
    case CREATE_TASK:
      if (! action.state) action.state = 'todo';
      return tasks(state[action.state], action);
    case UPDATE_TASK:
      if (! action.state) action.state = 'todo';
      return tasks(state[action.state], action);
    default:
      return state;
  }
};

export default columns;
