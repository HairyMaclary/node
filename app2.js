const NumEventer = require('./numEvents');

const numEventer = new NumEventer();

console.log('start');

// request a random number from the "net"
numEventer.request();

console.log('fin');


