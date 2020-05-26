process.stdin.resume();
process.stdin.setEncoding('utf-8');

var __input_stdin = "";
var __input_stdin_array = "";
var __input_currentline = 0;

process.stdin.on('data', function(data) {
    __input_stdin += data;
});

/*
 * Complete the function below. generate fibonacci sequence
  var arr= [input];
    arr[0]=0;
    arr[1]=1;
    while(arr.length<=input){
        arr.push[arr[arr.length]+arr[arr.length-1]];

    }
 */
function fibonacciSequence(input) {
	if(input <= 0){
		return "enter a valid number";
	}
	if(input == 1){
		var number = [0];
	    return number;
	}
	
	if(input == 2){
		var number = [0, 1];
	    return number;
	}
	else {
	
	var number = [0, 1];
	while(number.length<=input){
			number.push(number[number.length-1]+ number[number.length-2]);
			
	}
	return number;
	}
}
var fs = require('fs');