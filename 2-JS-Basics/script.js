//lecture on variable
/*
var name='john';
console.log(name);

var lastName='smith';
console.log(lastName);

var age = 25;
console.log(age);

var height = 5.5;
console.log(height);

var fullAge = true;
console.log(fullAge);
*/

//lecture variables continued

/*

var name = 'John';
var age = 26;

console.log(name+age);
console.log(age+name);
console.log(name+name);
console.log(age+age);

var job,married;

console.log(job);
console.log(job+married);

job='software engineer';
married=false;

console.log(name+age+job+married);

job = 'driver';
age = 'twenty seven';
console.log(name+age+job+married);

var lastName = prompt('what is the last name? ');
console.log(lastName);

alert(name+age+job+married);
*/


//lecture on operators

/*var ageJohn = 30;
ageJohn++;
console.log(ageJohn);
console.log(++ageJohn);*/


//lecture on if/else

var name = 'John';
var age = 26;
var isMarried = 'no';
var ageString = '26';
if(isMarried === 'yes') {
    console.log(name+' is married');
} else {
    console.log(name+' is not married');
}
if(isMarried == 'yes') {
    console.log('does not work');
}

isMarried = false;

if(isMarried) {
    console.log('yes');
} else {
    console.log('no');
}



if(isMarried === age) {
    console.log('weird');
}
if(age === name) {
    console.log('weirder');
}
//no type coercion for ===
if(age === ageString) {
    console.log('weirdest');
}

if(age == ageString) {
    console.log('type coersion happened');
}


var job = 'teacher';

switch (job) {
    case 'teacher':
        console.log('John is teacher');
        break;
    case 'driver':
        console.log('john is driver');
        break;
    default:
        console.log('John does something else');
    }

