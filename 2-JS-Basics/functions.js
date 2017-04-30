function calculateAge(yearOfBirth) {
    var age = 2017 - yearOfBirth;
    return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1984);
var ageJack = calculateAge('2000'); // still work with type coercsion
var ageMary = calculateAge('blah'); //NaN not a number weird
console.log(ageMike);
console.log(ageJohn);
console.log(ageJack);
console.log(ageMary);
