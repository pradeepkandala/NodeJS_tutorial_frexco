const https = require('https');
var fs = require('fs');

const options = {
  hostname: 'en.wikipedia.org',
  port: 443,
  path: '/wiki/Nodejs',
  method: 'GET'
};

var htmdata = "";

const req = https.request(options, res => {
  //console.log("statusCode:" ${res.statusCode});

  res.on('data', d => {
	  fs.writeFile('Nodejs.html', d, function (err) {
  if (err) throw err
  //console.log('Saved!');
});
	  
	
  });
 });

req.on('error', error => {
  console.error(error);
});

req.end();

/*htmdata = process.stdout.write(d);
	console.log(htmdata);*/
