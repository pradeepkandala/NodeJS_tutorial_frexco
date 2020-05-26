var i=999;


for(j=999; j > 100;j--){
		console.log("value of j multiply i  is: " +j*i);
     var check = i*j;
	 	console.log("value of j multiply i  is: " +check.toString);
     
	if(palindrome(check))
	{
		console.log("the largest palindrome in three digit number is: "  + i*j);
		break;
	}
}

function palindrome(str) {
	console.log(str);
  var re = /[\W_]/g;
  //var lowRegStr = str.toLowerCase().replace(re, '');
  var lowRegStr = str;
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  return reverseStr === lowRegStr;
}

/*const fibonacci = require ('fibonacci');
const bigNumber = fibonacci.iterate (3000);
console.log (bigNumber);
*/