var fs= require('fs');

var i=0;
var writeData="Node.js is an ultimate backend javascript for backend development"
var writeStream = fs.createWriteStream('Big_data.txt');

while(i < 100000 ){
writeStream.write(writeData, 'UTF8');
i++;
}



writeStream.on('finish', function(){
	console.log("completed writing")
});