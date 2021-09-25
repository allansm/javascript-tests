fh = require("../../../js-lib/node/fileHandle");

fh.writeFile("test","hello\nworld");

fh.writeLine("test","\nallansm");

var cwd = fh.getcwd();

console.log("current dir :"+cwd);

var lines = fh.getLines("fileHandleTest.js");

lines.forEach(function(line){
	console.log(line);
});

fh.chdir("c:/users");

fh.getFiles(".").forEach(function (file){
	console.log(file);
});

fh.chdir(cwd);

fh.getFiles(".").forEach(function (file){
	console.log(file);
});

if(fh.exists("test")){
	fh.remove("test");
	console.log();
	console.log("removed >> test");
}
