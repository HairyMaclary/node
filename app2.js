var http = require('http');
var fs = require('fs');

http.createServer(
    function (req, res) {
        if(req.url === '/') {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });

            fs.createReadStream(__dirname + '/index2.html').pipe(res);
        }
        else {
            res.writeHead(404, {
                'Content-Type': 'text/plain'
            })
            res.end('Sorry, no idea what you are talking about.');
        }
    }
).listen(443, '127.0.0.1');
