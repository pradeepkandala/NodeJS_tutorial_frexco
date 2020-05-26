
var number = lcm(2); 

function gcd(a, b)
{
   if(a%b !== 0){
     return gcd(b, (a%b));
	 
   }
   else return b;
}

function lcm(n){
  var ans = 1;
  for( var i=0 ; i < n; i++){
    ans = (ans*i)/(gcd(ans,i));
  }
  return ans;
}







