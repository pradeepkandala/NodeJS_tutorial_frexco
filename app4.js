var math1 = require('./modules.js');
var readline = require('readline');

console.log("is it working ? ");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('enter first numbers ', (a1) => {
  console.log(`First number is ${a1}`);
});

rl.question('enter second numbers ', (a2) => {
  console.log(`Second number is ${a2}`);
});

math1.add(a1,a2);
math1.multiply(a1,a2);

