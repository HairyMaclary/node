'use strict';

var EventEmitter = require('events');

// use extends instead of util.inherits(Greetr, EventEmitter);

module.exports = class Greetr extends EventEmitter {
    constructor() {
        super(); // get specific object properties
        this.greeting = 'Hello World!';
    }

    greet(data) {
        console.log(this.greeting + ': ' + data);
        this.emit('greet', data);  // normally don't use a magic string
    }

}


