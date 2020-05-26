var http = require('http');
var url = require('url');
function startserver(route, handler){
	function onRequest(request, response) {
		if(request.method === 'POST'){
			
		}
		
		else {
		var pathname= url.parse(request.url).pathname;
		var reviewData="";
		console.log("the path request received for is : "+ pathname);
		console.log("Request received");
		request.setEncoding("UTF8");
		request.addListener("data", function(chunk){
		reviewData += chunk;
		});
		request.addListener("end", function () {
			route(pathname, handler,response,reviewData);
		});
		};
		
	}

	http.createServer(onRequest).listen(9999);

	console.log("Server started on port 9999");
}
exports.startserver = startserver;