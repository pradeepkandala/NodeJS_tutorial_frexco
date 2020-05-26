var limit=2000000;
var sum=0;

for( var x=1;x<limit;x++){
	if(sum < limit){
    if(checkPrime(x)){
		sum=sum+x;
	}
	
	}
}

function checkPrime(n){
    var count=0;
	for( var i=2;i<n;i++)
	{
		if(n%i === 0){
			count++;
		}
		if(count>1){
			return false;
			break;
		}
		
	}
	if(count === 0){
			return true;
		}
}

console.log(sum);
