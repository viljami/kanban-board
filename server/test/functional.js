
'use strcict';

require('chai').should();
require('../index');
const io = require('socket.io-client');

describe('Server socket API', function(){
  let client;
  this.timeout(10000);

  beforeEach(() => {
    client = io('http://localhost:3000');
  });

  afterEach(() => {
    client.disconnect();
  });

  it('should get all tasks in the beginning of connection', done => {
    client.on('message', data => {
      data.should.have.property('type', 'SET_TASKS');
      data.data.should.be.an.Array;
      done();
    });
  });

  it('should create a task', done => {
    const action = {
      type: 'CREATE_TASK',
      text: 'my new task ' + Math.floor(Math.random() * 10000),
      state: 'inProgress'
    };

    let counter = 0;

    client.on('message', data => {
      if (++counter !== 2) return;
      const task = data.data.find(o => o.text === action.text);
      task.text.should.equal(action.text);
      task.state.should.equal(action.state);
      done();
    });

    client.emit('message', action);
  });

  it('should update a task', done => {
    const action = {
      type: 'UPDATE_TASK',
      id: 1,
      text: 'my new task ' + Math.floor(Math.random() * 10000),
      state: 'inProgress'
    };

    let counter = 0;

    client.on('message', data => {
      if (++counter !== 2) return;
      const task = data.data.find(o => o.id === action.id);
      task.text.should.equal(action.text);
      task.state.should.equal(action.state);
      done();
    });

    client.emit('message', action);
  });
});
