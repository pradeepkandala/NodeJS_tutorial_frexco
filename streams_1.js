var fs = require('fs');

var readableStream = fs.createReadStream('now.txt');
var data='';

readableStream.setEncoding('UTF8');
readableStream.on('data',function(chunk){
	data +=chunk;
});
readableStream.on('end',function(){
	console.log(data);
});

var writeData="Hello Pradeep"
var writeStream = fs.createWriteStream('output.txt');
writeStream.write(writeData, 'UTF8');
writeStream.on('finish', function(){
	console.log("completed writing")
});