var i;
var sumofsq=0;
var answer;
for(i=1;i<101;i++){
	sumofsq += Math.pow(i,2);
}

var sqofsum=Math.pow((50*101),2);
console.log("sumofsq : " +sumofsq);

console.log("sqofsum: " +sqofsum);
answer = sumofsq-sqofsum;

console.log("answer: " +answer);



/*differnece between sum of square and square of sum.
for the first 100 natural numbers

TEST_1=$(node App.js | grep -e "25164150" | wc -l )


(1^2+2^2) + -(1..100)^2*/  