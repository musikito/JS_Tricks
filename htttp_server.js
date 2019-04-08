/**
 * A nifty way to serve a page dynamically with the
 * BuildPage function
 */

var http = require('http');

http.createServer(function (req, res) {
  var html = buildPage(req); //call the page builder

  res.writeHead(200, { //write that everything is ok
    'Content-Type': 'text/html',
    'Content-Length': html.length, //the length of the whole "page"
    'Expires': new Date().toUTCString()
  });
  res.end(html); //close the stream
}).listen(8080); //go to localhost on port 8080