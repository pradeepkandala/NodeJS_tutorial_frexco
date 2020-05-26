var fs = require('fs');

fs.readFile('input.txt', function(err, data){
	if(err){
	    console.log(err);
	} else{
	    console.log("Successfully reading the async data" + data.toString());
	}
});



var data= fs.readFileSync('input.txt');
console.log("thus us sync data reading " + data.toString());

console.log("End of the file");
