
'use strict';

const actionTypes = require('./action.types');

const states = ['todo', 'inProgress', 'done'];
const initialState = [];

let id;

for (id = 0; id < 10; ++id){
  initialState.push({
    id: id,
    text: 'test ' + id,
    state: states[id % 3]
  });
}

function task (state = {}, action = {}) {
  switch (action.type) {
    case actionTypes.CREATE_TASK:
      return {
        id: ++id,
        text: action.text || 'New Task',
        state: action.state || 'todo'
      };
    case actionTypes.UPDATE_TASK:
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

module.exports = function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.CREATE_TASK:
      return [...state, task(undefined, action)];
    case actionTypes.UPDATE_TASK:
      return state.map(o => task(o, action));
    default:
      return state;
  }
};
