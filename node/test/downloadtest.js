function download(){
	http = require(protocol);
	fs = require('fs');

	file = fs.createWriteStream(fname);
	request = http.get(link, function(response) {
		response.pipe(file);
	});
}

function getSource(link,protocol,lambda){
	http = require(protocol);
	fs = require('fs');
	
	request = http.get(link, function(response) {
		html = "";
		response.setEncoding("utf8");

		response.on('data',function (chunk){
			html+=chunk;
		});
		
		response.on('end',lambda);
	});
}

function test(link,protocol){
	http = require(protocol);
	fs = require('fs');
	
	return http.get(link);
}

/*getSource("https://www.google.com","https",function(){
	console.log(html);
});*/

console.log(test("https://www.google.com","https"));
