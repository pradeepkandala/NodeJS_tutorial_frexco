var sum=0;
var i=0;


while(i < 1000 ){
isDivisibleByFive(i);
i++;
}

function isDivisibleByFive(number) {
	if (number%5==0) {
		sum=sum+number;
	}
}

console.log(i);
console.log(sum);