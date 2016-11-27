
'use strict';

const taskActionTypes = require('./action.types');

module.expots = {
  addTask: (text, state) => ({type: taskActionTypes.ADD_TASK, text, state}),
  updateTask: (id, text, state) => (
    {type: taskActionTypes.UPDATE_TASK, id, text, state}
  )
};
