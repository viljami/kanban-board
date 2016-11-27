
import * as taskActionTypes from '../task/task.action.types';

export const addTask = text => ({
  type: taskActionTypes.CREATE_TASK,
  text,
  state: 'todo'
});

export const updateTask = (id, text, state) => (
  {type: taskActionTypes.UPDATE_TASK, id, text, state}
);
export const setTasks = tasks => ({type: taskActionTypes.SET_TASKS, tasks});
