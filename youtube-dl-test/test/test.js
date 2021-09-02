const youtubedl = require('youtube-dl-exec')

let flag = true;
function test(output){
	/*output["formats"].forEach(function (format){
		console.log("url:"+format["url"]+"\next:"+format["ext"]+"\n");
	});*/
	//console.log(output["title"]);
	//console.log(output);
	
}
function getPlayList(output){
	var i = 0;
	var arr = "";
	output["entries"].forEach(function (out){
		arr[i++] = out["webpage_url"];
	});

	return arr;
}

function test2(output){
	var tmp = output;
	console.log(tmp);
}
var playlist = "";
var video = "https://www.youtube.com/playlist?list=PLIY8eNdw5tW_uaJgi-FL9QwINS9JxKKg2";//"https://www.youtube.com/watch?v=uBBDMqZKagY";
/*
youtubedl(video, {
  dumpSingleJson: true,
  noWarnings: true,
  noCallHome: true,
  noCheckCertificate: true,
  preferFreeFormats: true,
  youtubeSkipDashManifest: true,
  referer: video
})
  .then(output => test2(output))
*/

const test3 = async () =>{
	const v = youtubedl(video, {
	  dumpSingleJson: true,
	  noWarnings: true,
	  noCallHome: true,
	  noCheckCertificate: true,
	  preferFreeFormats: true,
	  youtubeSkipDashManifest: true,
	  referer: video
	});
	return await v;

}

console.log(test3);
