var value = 4000000;
var sum = 0;
var a = 1;
var b = 2;
var c = 0;
fibonacci();
function fibonacci(){
	
	//console.log("a : " + a + " b :" +b + " c : " +c );
	
	while (b < value){
		c = a + b;
		a = b;
		b = c;
		if(b%2 === 0){
			//console.log("are you there ");
			sum += b;
		}
		value--;
		fibonacci();
	}
	
	
}
console.log("Sum : " +sum);
sum=sum+2;
console.log("Sum : " +sum);

