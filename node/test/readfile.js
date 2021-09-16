function readFile(fname){
	fs = require('fs');
	
	return fs.readFileSync(fname).toString();
}

function getLines(fname){
	fs = require('fs');
	
	return fs.readFileSync(fname).toString().split("\n");	
}

var txt = getLines("test.txt")[1];

console.log(txt);
