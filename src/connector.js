
import * as actionTypes from './task/task.action.types';
import io from '../node_modules/socket.io-client/dist/socket.io';

const protocol = 'ws:';
const hostname = location.hostname;
const port = 3001;

export default function(){
  const socket = io(`${protocol}//${hostname}:${port}`);

  return {
    setStore: store => {
      socket.on('message', data => store.dispatch.bind(store)(data));
    },

    middleware: store => next => action => {
      if (action.type === actionTypes.SET_TASKS) return next(action);
      socket.emit('message', action);
      return store.getState();
    }
  };
}
