function rand(min,max){
	return Math.floor(Math.random() * (max-min+1))+min;
}

function test(){
	var arr = [1,2,3,4,5];
	var index = [];
	
	var i=0;
	while(index.length < arr.length){
		var tmp = rand(0,arr.length-1);
		var flag = true;
		for(var n=0;n<index.length;n++){
			if(index[n] == tmp){
				flag = false;
			}
		}
		if(flag){
			index[i++] = tmp;
		}
	}
	
	var ret = [];
	i=0;
	for(var n=0;n<index.length;n++){
		ret[i++] = arr[index[n]];	
	}
	console.clear();
	console.log(ret);	
}

console.log(rand(0,10));

setInterval(test,100);

