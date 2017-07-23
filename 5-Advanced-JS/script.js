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


//Immediately invoked function expressions

(
    function () {
        var random = Math.random() * 10;
        console.log(5 >= random );
    }
) ();

(function (goodLuck) {
    var random = Math.random() * 10;
    console.log(5 >= random - goodLuck);
}) (5);


//closures

function interviewQuestions(job) {
    return function(name) {
        if(job === 'designer') {
            console.log(name+'what is ux design?');
        } else if(job === 'teacher') {
            console.log('what subject do you teach '+name);
        } else {
            console.log('what do you do? '+name);
        }
    }
}

interviewQuestions('teacher')('kelly');



var john = {
    name:'john',
    job:'plumber',
    age:26,
    presentation: function(style, timeOfDay) {
        if(style === 'formal') {
            console.log('Good '+timeOfDay+' ladies and gentlemen '+'i am '+this.name+' i am a '+this.job+ ' i am '+this.age+' years old.');
        } else if (style === 'informal') {
            console.log(timeOfDay+' folks, whats up? '+'i am '+this.name+' i am a '+this.job+ ' i am '+this.age+' years old.');
        }
    }
};

john.presentation('formal','morning');

var emily = {
    name: 'emily',
    job: 'model',
    age: 25
}

var emilyFriendly = john.presentation.call(emily,'informal','evening');
var emilyFormal = john.presentation.bind(emily,'formal','night');
emilyFormal();
var emilyFormal1 = john.presentation.bind(emily,'formal');
emilyFormal1('morning');

*/

//coding challenge

var Question = function() {

}
Question.prototype.askQuestion = function() {
    var questions = ['which is the best programming language in the world?','who is the hottest in the world?','which video game was best ever?'];
    var hints = [
        ['java','javascript','c++'],
        ['kelly brook','keeley hazell','kate upton'],
        ['mario world','battle tank','half life']
    ];
    var answers = [1,3,2];
    var random = Math.floor(Math.random() * questions.length);
    console.log(questions[random]);
    for(var i = 0; i < 3; i++) {
        console.log(i+1+'. '+hints[random][i]);
    }
    var answer = prompt('answer');
    console.log(answer);
    alert(answer == answers[random]?'correct':'wrong');
}
var question = new Question();
question.askQuestion();
