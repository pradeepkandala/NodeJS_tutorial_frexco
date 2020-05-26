var fs = require('fs');

fs.readFile('To_Read.txt', function(err, data){
	if(err){
	    console.log(err);
	} else{
	    console.log(data.toString());
	}
});
