function writeFile(fname,txt){
	fs = require('fs');
	
	fs.writeFile(fname,txt,function (err) {
		if (err) return console.log(err);
	});
}

function writeLine(fname,txt){
	fs = require('fs');
	
	fs.appendFile(fname,txt, function (err) {
		  if (err) throw err;
	});
}

writeLine("test.txt","hello\n");
writeLine("test.txt","world\n");
