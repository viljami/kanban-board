
'use strict';

const createStore = require('redux').createStore;
const reducer = require('./reducer');

module.exports = function makeStore() {
  return createStore(reducer);
};
