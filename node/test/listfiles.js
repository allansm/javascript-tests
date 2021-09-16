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

if(exists(getFiles(".")[0])){
	console.log(getFiles(".")[0]);
}
