th = require("../../../js-lib/node/timeHandle");

var start = th.timeToMillis();

while(true){
	console.log(th.toSec(th.elapsed(start)));
}
