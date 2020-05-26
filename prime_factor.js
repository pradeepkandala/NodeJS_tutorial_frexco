var nmb=123;
var value = Largest();
    console.log(value);
function Largest(){
    var x;
    for(i=2;i<=nmb;i++){
        if(nmb%i == 0){
          while (nmb%i==0) nmb/=i;
          x=i;
          }
		 if (x<1)
          sum=sum+i;			 
    }
    return sum;
}