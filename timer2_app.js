var tcs = setInterval (function intervalFunc() {
  console.log('TCS')
},2000);


clearInterval(tcs,10000);