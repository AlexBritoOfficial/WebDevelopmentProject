const EventEmitter = require('events');

/** Create class */
class MyEmitter extends EventEmitter {}

/**Init object */
const myEmitter = new MyEmitter();

/**Create Event Listener
 * param event, callback function
 */

myEmitter.on('event', function() {
  console.log('Event Fired');
});

/** Arrow Function */
// myEmmitter.on('event', () =>{
//     console.log('Event Fired');
// });

// Init event
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
