function getFiles(path){
	fs = require("fs");

	return fs.readdirSync(path);
}

function exists(path){
	fs = require("fs");
	
	if(fs.existsSync(path)){
		return true;
	}else{
		return false;
	}
}

function chdir(path){
	proc = require("process");

	proc.chdir(path);
}

function remove(file){
	fs = require("fs");
	
	fs.unlinkSync(file);
}

function getcwd(){
	proc = require("process");

	return proc.cwd();
}

console.log(getcwd());

chdir("..");

console.log(getcwd());

console.log(getFiles("."));

chdir("..");

console.log(getcwd());

if(exists(getFiles(".")[0])){
	console.log(getFiles(".")[0]);
}
