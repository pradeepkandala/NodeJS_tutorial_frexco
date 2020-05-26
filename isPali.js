var mul=0;
for( var i=999;i>900;i--) {
	for(var j=999;j>900;j--) {
	mul=i*j;
	if(isPalindrome(mul)){
		console.log("number is palindrome " +(mul));
		break;
	}
	
	}
	
}


function isPalindrome(number)
	{
		var rem;
		var final=0;
		temp = number;
		while(number>0)
		{
			rem = number%10;
			number = parseInt(number/10);
			final = final*10+rem;
		}
		
		if(final==temp){
			return true;
		} else {
			return false;
		}	
	}