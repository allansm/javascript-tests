fs = require('fs');

function writeFile(fname,txt){
	fs.writeFile(fname,txt,function (err) {
		if (err) return console.log(err);
	});
}

function writeLine(fname,txt){
	fs.appendFile(fname,txt, function (err) {
		  if (err) throw err;
	});
}
