
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import App from './App';
import columns from './column/column.reducer';
import './index.css';
import connector from './connector';

const taskApp = combineReducers({columns: columns});
const connection = connector();

const store = createStore(
  taskApp,
  applyMiddleware(connection.middleware)
);
connection.setStore(store);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
