var names = ['John','Jane','Mark'];
var years = new Array(1990,1969,1940);

console.log(names);
console.log(names[99]);
console.log(years);
names[99] = 'Cash';
console.log(names[99]);
console.log(names[98]);
var nullcheck = null;
//console.log(nullcheck.getAllResponseHeader());

//weird js allows different datatypes in an array

var john = ['John',26,'teacher',false];

console.log(john);

john.push('American');
console.log(john);

john.pop();
console.log(john);
john.unshift('Mr.');
console.log(john);
john.shift();
console.log(john);

console.log(john.indexOf('teacher'));
console.log(john.indexOf('blah'));


