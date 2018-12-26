var http = require('http');

http.createServer(function(req, res) {

   res.writeHead(
      200, 
      {
         'Content-Type': 'text/plain'  // simple plain text
      }
   );

   res.end('Hello World\n'); // Always end data with a new line.

}).listen(1337, '127.0.0.1'); // use port 1337 on localhost.