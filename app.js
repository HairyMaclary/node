var express = require('express');
var app = express();

// use default port 3000 if no ennvironment variable has been set.
var port = process.env.PORT || 3000;

// any URL that begins with '/assets' will be handled here
app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

// the css link specifies 'assets' so a request for such will be sent by the browser
app.get('/', function(req, res, next) {
    res.render('index');
    next();
});

app.use('/', function(req, res, next) {
    console.log('Request URL: ' + req.url);
    //invoke this callback. It just means run the next middleware after completion
    next();
})

// req.params contains the arguments generated bymatching the request URL and the pattern.
app.get('/person/:id', function(req, res, next) {
    res.render('person', { ID: req.params.id });
    next();
});

// send object literal syntax automatically converted to a JSON string
app.get('/api', function(req, res) {
    res.json({ firstName: 'John',  lastName: "Doe"});
});

app.listen(port);














// var http = require('http');
// var fs = require('fs');

// http.createServer(function(req, res){
//     if(req.url === '/') {
//         fs.createReadStream(__dirname + '/index.html').pipe(res);
//     }

//     else if(req.url === '/api') {
//         res.writeHead(200, {
//             "Content-Type": "text/plain"
//         });
//         fs.readFile(
//             __dirname + '/package.json', 
//             {
//                 encoding: 'utf8'
//             },
//             function(error, data) {
//                 res.end(JSON.stringify(data));
//             }
//         );
//     }

//     else {
//         res.writeHead(404);
//         res.end();
//     }
// }).listen(1337, '127.0.0.1');






