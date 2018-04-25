var http = require('http');
var fs = require('fs');
var index = fs.readFileSync('q2.html');

var s = require('./q2rev.js');
s.arrangeIntoTree();

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(index);
}).listen(8080);