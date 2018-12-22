const fs = require('fs');

const greet = fs.readFileSync(__dirname + '/greet.txt', 'utf-8'); // utf-8 encoding specified

console.log(greet);

const greet2 = fs.readFile(__dirname + '/greet.txt', 'utf-8', function(error, data) {
   console.log('data inside readfile callback: ', data.toString());
});

console.log(greet2);