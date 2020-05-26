var sum = 0;


fact(100);
	
function fact(n){
	console.log("print somthing " +n);
	sum = sum + n;
	if (n>1){	 
		fact(n-1);
	}
}

console.log("Sum: " +sum);