const youtubedl = require('youtube-dl-exec')

function getInfo(video){
	return youtubedl(video, {
		dumpSingleJson: true,
		noWarnings: true,
		noCallHome: true,
		noCheckCertificate: true,
		preferFreeFormats: true,
		youtubeSkipDashManifest: true,
		referer: video
	});	
}

//let flag = true;
function test(output){
	/*output["formats"].forEach(function (format){
		console.log("url:"+format["url"]+"\next:"+format["ext"]+"\n");
	});*/
	//console.log(output["title"]);
	//console.log(output);
	console.log(output);	
}
function getPlaylist(output,lambda){
	var playlist = "";
	var i = 0;

	output["entries"].forEach(function (out){
		playlist[i++] = out["webpage_url"];
	});

	lambda(playlist);	
}

function getTitle(output,lambda){
	lambda(output["title"]);	
}

function getFormats(output,lambda){
	lambda(output["formats"]);
}

function getUrl(formats){
	formats.forEach(function (format){
		console.log("url:"+format["url"]+"\next:"+format["ext"]+"\n");
	});
}

/*function test2(output){
	var tmp = output;
	console.log(tmp);
}*/
var playlist = "";
//playlist : "https://www.youtube.com/playlist?list=PLIY8eNdw5tW_uaJgi-FL9QwINS9JxKKg2";
//video : https://www.youtube.com/watch?v=uBBDMqZKagY";


var info = getInfo("https://www.youtube.com/playlist?list=PLIY8eNdw5tW_uaJgi-FL9QwINS9JxKKg2");

var show = function (playlist){
	playlist.forEach(function (link){
		console.log(link)
	});
};

var tst = function (entries){
	console.log(entries);
}

info.then(output => getPlaylist(output,show));
