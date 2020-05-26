var querystring = require('querystring');

function home(response) {
 console.log("Executing Home handler");
 var htmlfile='<html>'+
           '<body>'+
		   '<form action="/review" method="post">' +
           '<textarea name="text" rows="20" cols="40"></textarea>' +
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