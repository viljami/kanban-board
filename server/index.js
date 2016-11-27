// Server inspired by:
// https://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html

'use strict';


const makeStore = require('./src/store');
const startServer = require('./src/server');

startServer(makeStore());
