var http = require('http');

	function onRequest(request, response) {
		console.log("Request received");
		response.writeHead(200,{"Content-Type" : "text/plain"});
		response.write("Many More Happy returns of the Day Bava!!");
		response.end();
	}

	http.createServer(onRequest).listen(8000);

