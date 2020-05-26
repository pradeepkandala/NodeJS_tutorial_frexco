var sum=3;

var number =200000;


for(var a=3;a<number;a++){
    if(isPrime(a)){
		//console.log("number : "+a);
		sum += a;
	}
}
console.log("sum=" +sum);

function isPrime(val){
	var counter=0;
	for(var i=2;i<val;i++){
		if(val%i==0){
			counter++;
		}
	if(counter >  0){
		return false;
		break;
	}
	else 
		return true;
}
}