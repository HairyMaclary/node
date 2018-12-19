const util = require('util');

function Person() {
    this.firstName = "John";
    this.lastName = "Doe";
}

Person.prototype.greet = function() {
    console.log(`Hello ${this.firstName} ${this.lastName}`);
}

function PoliceOfficer() {
    // Because this is a function constructor an empty object is assigned to 'this'
    Person.call(this); // attach properties to `this` from the super constructor
    this.badgeNumer = 1234;
}

// make the prototype of the prototype for police objects the same prototype
// that Person objects have.
util.inherits(PoliceOfficer, Person);

const officer = new PoliceOfficer();

// name properties inherited
officer.greet(); // Hello John Doe

// greet is on the proto of the proto!
officer.__proto__.__proto__.greet(); // Hello undefined undefined
