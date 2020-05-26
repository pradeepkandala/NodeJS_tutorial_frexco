function add(first , second) {
 console.log(first+second);
}

//add(4,5);

var a= '10';
var b= '20';

add(process.argv[0], process.argv[1]);
add(parseInt(process.argv[2]), parseInt(process.argv[3]));


setInterval(function() {
    console.log("TCS")
	},2000)