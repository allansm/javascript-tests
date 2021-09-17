function has(txt,keyword){
	return txt.includes(keyword);
}

if(has("helloworld","hello")){
	console.log("helloworld".split("w")[0]);
}else{
	console.log("not has");
}
