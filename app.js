const fs = require('fs');
const zlib = require('zlib');

var readable = fs.createReadStream(
   __dirname + '/greet.txt'
);

var writable = fs.createWriteStream(__dirname + '/greetCopy.txt');

// a stream of compressed data to a file
var compressed = fs.createWriteStream(__dirname + '/greetCopy.txt.gz');

// a transformative stream; creates compressed data
var gzip = zlib.createGzip(); 

// Cannot chain from 'writable' because it's not readable
readable.pipe(writable);

// three streams here: 'readable', 'gzip', 'compressed'.
readable.pipe(gzip).pipe(compressed);





