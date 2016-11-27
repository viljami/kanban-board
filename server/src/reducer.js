
'use strict';

const actionTypes = require('./action.types');

const states = ['todo', 'inProgress', 'done'];
const initialState = [];

let id;
for (id = 0; id < 10; ++id){
  initialState.push({
    id: id,
    text: 'test 1',
    state: states[id % 3]
  });
}

module.exports = function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.CREATE_TASK:
      return [
       ...state, {
        id: ++id,
        text: action.text,
        state: action.state
       }];
    case actionTypes.UPDATE_TASK:
      const task = state.find(o => o.id === action.id);
      if (action.text) task.text = action.text;
      if (action.state) task.state = action.state;
      return state;
    default:
      return state;
  }
};
