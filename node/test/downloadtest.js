function download(link,fname,protocol){
	http = require(protocol);
	fs = require('fs');

	file = fs.createWriteStream(fname);
	request = http.get(link, function(response) {
		response.pipe(file);
	});
}

function useSource(link,protocol,lambda){
	http = require(protocol);
	fs = require('fs');
	
	request = http.get(link, function(response) {
		src = "";
		response.setEncoding("utf8");

		response.on('data',function (chunk){
			src+=chunk;
		});
		
		response.on('end',lambda);
	});
}

function useJson(link,protocol,lambda){

	useSource(link,protocol,function(){
		let json = JSON.parse(src);
		lambda(json);
	});
}

useJson("https://www.reddit.com/r/popular.json","https",function(json){
	json["data"]["children"].forEach(function(child){
		console.log(child["data"]["title"]);
	});
});

