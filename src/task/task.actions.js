
import * as taskActionTypes from '../task/task.action.types';

export const addTask = text => ({type: taskActionTypes.ADD_TASK, text});
export const updateTask = (id, text) => (
  {type: taskActionTypes.UPDATE_TASK, id, text}
);