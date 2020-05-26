

function route(pathname, handel, response, reviewData){
	console.log("the path requested for in router is : " + pathname);
	if(typeof handel[pathname] === 'function'){
		handel[pathname](response,reviewData);
	}else {
		response.writeHead(404,{"Content-Type" : "text/html"});
		response.write("404 No such page found");
		response.end();
		console.log("No handler exists");
	}
	
}
exports.route = route;