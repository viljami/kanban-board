
'use strict';

var app = require('http').createServer();
var io = require('socket.io')(app);
const port = 3000;
app.listen(port);

module.exports = function startServer(store) {
  console.log('Start Server...');

  const getState = () => ({type: 'SET_TASKS', data: store.getState()});
  io.emit('message', getState());

  io.on('connection', function(socket){
    console.log('Server: a new connection');
    socket.emit('message', getState());

    socket.on('message', store.dispatch.bind(store));

    socket.on('disconnect', () => {
      console.log('Server: client disconnected');
    });
  });

  store.subscribe(() => io.emit('message', getState()));
};

console.log('Server waiting connections on port ' + port);
