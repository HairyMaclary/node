const Emitter = require('events');

let emtr = new Emitter();

// Add some listeners

// say whenever a greet happens we want to do something.
emtr.on('greet', () => {
    console.log('Somewhere, someone said hello.');
});

// And this is another thing to do when a greet occurs
emtr.on('greet', () => {
    console.log('A greeting occured!');
});

// simulate the event:
console.log('Hello!');

// let the application know that a greet event happened
emtr.emit('greet');
