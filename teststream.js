var fs = require('fs');

var readableStream = fs.createReadStream('\Node-Stream-handson\\data_file.txt');


readableStream.setEncoding('UTF8');
readableStream.on('data',function(chunk){
	console.log(chunk.toString().length);
});
readableStream.on('end',function(){
	console.log("working on");
});