const events = require('events');

// This wont work cos emitter emitted start before it was returned
// const getEmitter = function () {
//   const emitter = new events.EventEmitter();
//   emitter.emit('start');
//   return emitter;
// };

// This will work cos we waiting for the next tick before emitting
const getEmitter = function () {
  const emitter = new events.EventEmitter();
  process.nextTick(() => emitter.emit('start'));
  return emitter;
};

let myemitter = getEmitter();
myemitter.on('start', () => console.log('Started'));
