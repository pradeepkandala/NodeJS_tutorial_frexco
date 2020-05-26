console.log("user 1");
setTimeout(callback,5000);

console.log("user 2");
setTimeout(callback,5000);

console.log("user 3");
setTimeout(callback,5000);

function callback(){
 console.log("serving the user");
}
