
import { ADD_TASK, UPDATE_TASK } from './task.action.types';

const initialState = [
  {id:'11', text:'task 11', state:'todo'},
  {id:'12', text:'task 12', state:'todo'},
  {id:'13', text:'task 13', state:'todo'},
  {id:'21', text:'task 21', state:'inProgress'},
  {id:'22', text:'task 22', state:'inProgress'},
  {id:'31', text:'task 31', state:'done'},
  {id:'32', text:'task 32', state:'done'},
  {id:'33', text:'task 33', state:'done'}
];

function task (state = {}, action = '') {
  switch (action.type) {
    case ADD_TASK:
      return {
        id: Math.round(Math.random() * 100000),
        text: action.text,
        state: 'todo'
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
    case ADD_TASK:
      return [...state, task(undefined, action)];
    case UPDATE_TASK:
      return state.map(o => task(o, action));
    default:
      return state;
  }
};

export default tasks;
