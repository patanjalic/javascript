var johnAge = 20;
var janeAge = 21;
var johnHeight = 5.2;
var janeHeight = 5.1;
var jackAge = 21;
var jackHeight = 5.1;

var johnScore = johnHeight + 5*johnAge;
var janeScore = janeHeight + 5*janeAge;
var jackScore = jackHeight + 5*jackAge;

if(johnScore > janeScore && johnScore > jackScore) {
    console.log('John win');
} else if(janeScore > johnScore && janeScore > jackScore) {
    console.log('Jane win');
} else if (jackScore > johnScore && jackScore > janeScore) {
    console.log('Jack win');
} else if(jackScore === johnScore && jackScore === janeScore) {
    console.log('Its a draw');
} else if(johnScore === jackScore) {
    console.log('John and Jack win');
} else if(janeScore === jackScore) {
    console.log('Jane and Jack win');
} else if(johnScore === janeScore) {
    console.log('John and Jane win');
}
