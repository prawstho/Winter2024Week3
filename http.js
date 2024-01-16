var http = require('http');
// var fs = require('fs');

serveText('Hello World');

function serveText(theText){
  http.createServer(function (req, res) {
    console.log('text was served.')
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(theText);
    res.write(', eat more lunch');
    res.end();
  }).listen(3000);
}