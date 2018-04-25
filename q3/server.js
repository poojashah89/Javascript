var http = require('http');
var system = require('system');
var fs = require('fs');
var index = fs.readFileSync('q3.html');

var first_value = process.argv[2];

var s = require('./q3.js');
s.arrangeIntoTree(first_value);

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(index);
}).listen(8080);