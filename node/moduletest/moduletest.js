function system(command){
	const { exec } = require("child_process");

	exec(command, (error, stdout, stderr) => {
		if (error) {
			console.log(`${error.message}`);
			return;
		}
		if (stderr) {
			console.log(`${stderr}`);
			return;
		}
		console.log(`${stdout}`);
	});
}

module.exports = function() { 
	    this.system = system;
}

