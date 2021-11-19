function rand(min,max){
	return Math.floor(Math.random() * (max-min+1))+min;
}

function test(){
	var arr = [1,2,3];

	console.log(arr);
}

console.log(rand(0,10))

test()
