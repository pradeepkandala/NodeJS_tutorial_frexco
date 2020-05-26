var http = require('http');
var fs = require('fs');
var querystring = require('querystring');

var data= fs.readFileSync('send.html');


	function onRequest(request, response) {
		if (request.method === 'POST') {
			let body = '';
			
			request.on('data', chunk => {
            body += chunk.toString('utf8');
        });

          request.on('end', () => {
            body = querystring.parse(body);
            // { name: 'Pradeep', gender: 'MALE', lastname: 'Kandala' }
            console.log(body);
		    fs.writeFile('some.txt', body, function (err) {
			if (err) throw err;
				console.log('Saved!');
			});

        });
			
			
		response.writeHead(200,{"Content-Type" : "text/html"});
		response.write("Saved the data");
		response.end();
		} else{
		
		console.log("Request received");
		response.writeHead(200,{"Content-Type" : "text/html"});
		response.write(data);
		response.end();
		}
	}

	http.createServer(onRequest).listen(8000);
	
	