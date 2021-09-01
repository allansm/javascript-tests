function runInside(lambda){
	lambda();
}

var tmp = function (){
	console.log("helloworld");
}

runInside(tmp);
