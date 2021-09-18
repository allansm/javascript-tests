let text = '{ "employees" : [' +
	'{ "firstName":"John" , "lastName":"Doe" },' +
	'{ "firstName":"Anna" , "lastName":"Smith" },' +
	'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

var obj = JSON.parse(text);

var person = [];

person["firstName"] = obj["employees"][1]["firstName"];
person["lastName"] = obj["employees"][1]["lastName"];

console.log("name:"+person["firstName"]+" "+person["lastName"]);


var json = JSON.stringify(obj);

console.log(json);
