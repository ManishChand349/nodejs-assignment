const EventEmitter = require('events');

// Step 1: Create an instance of the EventEmitter
const myEmitter = new EventEmitter();

// Step 2: Get the current maximum number of listeners for a particular event
const eventName = 'myEvent'; // Replace 'myEvent' with your desired event name
const currentMaxListeners = myEmitter.getMaxListeners();

console.log(`Current maximum number of listeners for '${eventName}': ${currentMaxListeners}`);

// Step 3: Set the maximum number of listeners to 51
const newMaxListeners = 51;
myEmitter.setMaxListeners(newMaxListeners);

console.log(`Maximum number of listeners for '${eventName}' has been set to ${newMaxListeners}`);
