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

function getPlaylist(output){
	var playlist = [];
	var i = 0;

	output["entries"].forEach(function (out){
		playlist[i++] = out["webpage_url"];
	});

	return playlist;	
}

function getTitle(output){
	return output["title"]
}

function getFormats(output){
	return output["formats"];
}

function getUrl(formats,ext){
	var tmp = "";
	formats.forEach(function (format){
		if(ext == format["ext"]){	
			tmp = format["url"];	
		}
	});
	return tmp;
}

function show(playlist){
	playlist.forEach(function (link){
		console.log(link);
	});
};

function run(pLink){
	var info = getInfo(pLink);
	info.then(output => {
		var title = getTitle(output);
		var playlist = getPlaylist(output);
		
		console.log(title);
		show(playlist);

		var tmp = getInfo(playlist[0]);
		tmp.then(out => {
			var formats = getFormats(out);
			var url = getUrl(formats,"mp4");
			console.log(url);
		});
	});	
}

run("https://www.youtube.com/playlist?list=PL2788304DC59DBEB4");

