/*var Person =function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

Person.prototype.calculateAge = function() {
    console.log(2017 - this.yearOfBirth);
};

Person.prototype.lastName = 'smith';
var john = new Person('john',1990,'plumber');
var jane = new Person('jane',1986,'bikini model');

john.calculateAge();
jane.calculateAge();
console.log(john.lastName);
console.log(jane.lastName);


var personProto = {
    calculateAge: function() {
        return 2017 - this.yearOfBirth;
    }
}

var john = Object.create(personProto);
john.name = 'john';
john.yearOfBirth = 1990;
john.job = 'plumber';

var jane = Object.create(personProto, {
    name: {value:'Jane'},
    yearOfBirth: {value:1986},
    job: {value:'bikini model'}
});



var array = [1990,1992,2009,2014,1984];

function calculateAges(array, fn) {
    var arrRes = [];
    for(var i=0;i<array.length;i++) {
        arrRes.push(fn(array[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2017 - el;
}

console.log(calculateAges(array,calculateAge));
*/

//functions returning function

function interviewQuestions(job) {
    if(job == 'designer') {
        return function(name) {
            console.log(name+'what is ux design?');
        }
        } else if(job == 'teacher') {
            return function(name) {
                console.log('what subject do you teach '+name+'?');
            }
        } else {
            return function(name) {
                console.log('what do you do? '+name);
            }
        }
    }


var teacherQuestions = interviewQuestions('teacher');
teacherQuestions('kelly');
var designerQuestions = interviewQuestions('designer');
designerQuestions('brook');
var defaultQuestions = interviewQuestions('plumber');
defaultQuestions('keeley');
interviewQuestions('teacher')('hazell');
