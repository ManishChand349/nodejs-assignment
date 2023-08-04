const events = require('events');

// Create an instance of the EventEmitter class
const eventEmitter = new events.EventEmitter();

// Subscribe to the 'subscribe' event
eventEmitter.on('subscribe', () => {
  console.log("User has subscribed!");
});

// Trigger the 'subscribe' event (simulating a user subscribing)
eventEmitter.emit('subscribe', "College Wallah");
