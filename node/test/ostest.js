function isWindows(){
	return process.platform == "win32";
}

function isLinux(){
	return process.platform == "linux";
}

function isMac(){
	return process.platform == "darwin";
}

function currentOs(){
	return process.platform;
}

console.log();
console.log("current os:");
console.log("	windows:"+isWindows());
console.log("	linux:"+isLinux());
console.log("	mac:"+isMac());
