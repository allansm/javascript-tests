function getBytes(txt){
	var bt = function(n) {return n.charCodeAt(0);}
	return txt.split('').map(bt);
}

console.log(getBytes("hello world!!!"));
