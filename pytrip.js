var sum = 1000;
 var a=0;
    for (a = 1; a <= sum/3; a++)
    {
        var b=0;
        for (b = a + 1; b <= sum/2; b++)
        {
            var c = sum - a - b;
            if ( a*a + b*b == c*c ){
               console.log("a: " +a+ "b : " +b + "c: " +c);
               var z = a*b*c ;
               console.log("product is " +z);
			}
        }
    }