var http = require('http');
/*http.createServer(function(request,response) {
	response.writeHead(200, {"Content-Type" : "text/plain"});
	response.write("Hello World");
	response.end();
}).listen(8000);
*/
var fs = require('fs');

var data2= fs.readFileSync('sample.html');
http.createServer(function(request,response) {
	response.writeHead(200, {"Content-Type" : "text/html"});
	response.write(data2);
	response.end();
}).listen(9999);