function getTemp(){
	os = require("os");

	return os.tmpdir();
}

console.log(getTemp());
