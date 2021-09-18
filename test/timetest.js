function timeToMillis(){
	return Date.now();
}

function toSec(mili){
	var tmp = (mili/1000);
	return Number.parseInt(tmp);
}

function elapsed(start){	
	return timeToMillis()-start;
}

var start = timeToMillis(); 

while(true){
	console.clear();
	console.log(toSec(elapsed(start)));	
}
