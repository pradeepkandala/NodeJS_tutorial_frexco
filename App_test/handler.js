var querystring = require('querystring');

function home(response) {
 console.log("Executing Home handler");
 var htmlfile='<html>'+
           '<body>'+
		   '<form action="/review" method="post">' +
		   '<input type="text" name ="fname"/>first name<br />' +
	       '<input type="text" name ="sname"/>last name<br />' +
	       '<input type="submit" value="Submit text">'+
           '</form>' +
           '</body>' +
           '</html>';
        response.writeHead(200,{"Content-Type":"text/html"});
		response.write(htmlfile);
		response.end();
			   
}

function review(response,reviewData) {
        response.writeHead(200,{"Content-Type":"text/plain"});
		response.write("your review is " + querystring.parse(reviewData).text );
		response.end();
 console.log("Executing Review handler");
}

exports.home = home;
exports.review = review;