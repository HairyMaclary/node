// could also use a class contructor to make this object
// we want to be able to create multiple emitters.
function Emitter() {
    this.events = {};
}

// add an "on" method to the protoype of all objects created from the function constructor
Emitter.prototype.on = function (type, listener) {

    //if the type property already exists then good, otherwise make a new array.
    this.events[type] = this.events[type] || [];
    
    // now push the listener function into the array
    // we are building up an array of functions. One array for each event type.
    // onBlah: [function() {...}, function() {...}, ... }
    this.events[type].push(listener);
}

// now we want to say that something happened; we emit an event.
Emitter.prototype.emit = function (type) {
    // If I have the type of event on my object, i'll loop over the 
    // associated array and execute each listener function
    if(this.events[type]) {
        this.events[type].forEach(listener => {
            listener();
        })
    }
}

module.exports = Emitter;





