var http = require('http');
// var fs = require('fs');

//serveText('Hello World');
serveHtml('<html><body><b>Woot</b> Woot</body></html>');

function serveText(theText){
  http.createServer(function (req, res) {
    console.log('text was served.')
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(theText);
    res.write(', eat more lunch');
    res.end();
  }).listen(3000);
}

function serveHtml(theHtml){
  http.createServer(function (req, res) {
    console.log('html was served.')
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(theHtml);
    res.end();
  }).listen(3000);
}