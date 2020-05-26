function relay(){
 console.log("this is under relay function");
}

function longjump() {
   console.log("this is longjump function");
}

module.exports.relay= relay;
//you can delete the above when writing below
module.exports = {
	relay: function(){
		console.log("this is relay function ");
	},
	longjump: function(){
		console.log("this is longjump exports  function ");
	},
}