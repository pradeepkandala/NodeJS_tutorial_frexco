function nthprime(n)
{
  var prime=[], i=2
  while (i++ && prime.length<n-1) prime.reduce((a,c)=>(i%c)*a,1) && prime.push(i)
  return prime.length?prime.pop():1
}
[10002].forEach(n=>console.log(`nthprime(${n})=${nthprime(n)}`))