// extends the events lib to handle sepcial random number events
const util = require('util');
const EventEmitter = require('events');
const eventConfig = require('./config2').events;

function NumEventer() {
    // add in a call to the super constructor if you also need to 
    // generate some object specific properties
    // EventEmitter.call(this);
}

util.inherits(NumEventer, EventEmitter);

NumEventer.prototype.on(eventConfig.NUM_REC, function(numData) {
    console.log(`Your percentage is: ${(numData*100).toPrecision(2)} %`);
});

NumEventer.prototype.request = function() {
    console.log('Sending a request for random number');

    setTimeout( () => {
        const randomNum = Math.random();
        //console.log('this in timeout is', this, this.emit);
        this.emit(eventConfig.NUM_REC, randomNum);
    }, 2000);
    
};

module.exports = NumEventer;