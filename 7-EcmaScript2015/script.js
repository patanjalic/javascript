/*
function testScope5() {
    console.log(name);
    if(true) {
        var name = 'john smith';
        var age = 20;
    }
    console.log(name+' '+age);
}

testScope5();

function testScope6() {
    if(true) {
        let name = 'john smith';
        const age = 20;
    }
    console.log(name+' '+age); // will not work because let and const are block scoped, change scope
}

testScope6();



function calculateAge(year) {
    return 2017 - year;
}
let name = 'john smith';
const yearOfBirth = 1990;
console.log(`i am ${name} i am ${calculateAge(yearOfBirth)} years old`);


const years = ['1990','1991','1980','1969'];

let ages = years.map(el => 2017 - el);
console.log(ages);

var ages1 = years.map((el,index) => {
    const currentYear = new Date().getFullYear();
    let age = currentYear - el;
    console.log(`age ${index}: ${age} `);
    return age;
});

console.log(ages1);



var box5 = {
    color:'green',
    position:1,
    clickMe: function(){
        //hack required here to access this object
        var obj = this;
        document.querySelector('.green').addEventListener('click',function() {
            alert('color '+obj.color+' position '+obj.position);
        });
    }
};
//box5.clickMe();


var box6 = {
    color:'green',
    position:1,
    clickMe: function(){
        //arrow function will have access to this object
        document.querySelector('.green').addEventListener('click',() => {
            alert('color '+this.color+' position '+this.position);
        });
    }
};
box6.clickMe();


function Person(name) {
    this.name = name;
}

Person.prototype.myfriends = function(friends) {
    return friends.map(function(el){
        return this.name+' friends with '+el;
    }.bind(this));
}

var john = new Person('John');
var friends = ['bob','jane'];
console.log(john.myfriends(friends));

Person.prototype.myfriends6 = function(friends) {
    return friends.map((el) => {
        return `${this.name} friends6 with ${el}`;
    });
}

var john = new Person('bob');
var friends6 = ['bob','jane'];
console.log(john.myfriends6(friends6));



//desctructuring

const [name,age] = ['john',26];

console.log(name);
console.log(age);

const obj = {
    'firstName':'john',
    'age1':26
};

const {firstName,age1} = obj;
console.log(firstName);
console.log(age1);

function calculateRetirement(age) {
    return [age,65-age];
}

const [age2,retirement] = calculateRetirement(26);
console.log(age2+' '+retirement);



//arrays in es6

const boxes = document.querySelectorAll('.box');

var boxArray5 = Array.prototype.slice.call(boxes);

/*boxArray5.forEach(function(cur){
        cur.style.backgroundColor = 'dodgerblue';
});*/
/*
Array.from(boxes).forEach((cur) =>{cur.style.backgroundColor = 'dodgerblue';});

var boxArray6 = Array.from(boxes);

for(const cur of boxArray6) {
    if(cur.className === 'blue') {
        continue;
    }
    cur.textContent = 'changed to blue';
}


//spread operator

var ages = [18,21,17,12];

function calcAges(a,b,c,d) {
    return a+b+c+d;
}
var sum = calcAges(...ages);
console.log(sum);
console.log(calcAges.apply(null,ages));


//rest parameters

function isFullAge() {
    console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments);
    argsArr.forEach(function(cur) {
        console.log(2017 - cur >= 18);
    });
}

function isFullAge6(...years) {
    console.log(years);
    years.forEach(cur => {
        console.log(2017 - cur >= 18);
    });
}
isFullAge(1990,1995,1986,2005);
isFullAge6(1990,1980,2005);


//default parameters

function SmithPerson(firstName, lastName='Smith', nationality='American',age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.nationality = nationality;
    this.age = age;
}

var john = new SmithPerson('John',20);


//maps


var questions = new Map();
questions.set(1,'one');
questions.set(2,'two');
questions.set(3,'three');
questions.set(4,'four');
questions.set('a','A');

questions.forEach((value,key) => {
    console.log(`key is ${key} value is ${value}`);
});

for(let [key,value] of questions.entries()){
    if(typeof(key) === 'number') {
        console.log(`key is ${key} value is ${value}`);
    }
}
*/

//classes

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    calculateAge() {
        const age = new Date().getFullYear() - this.age;
        console.log(age);
    }
}

const john = new Person('john','smith',20);


class Athlete extends Person {
    constructor(firstName,lastName,age,games,medals) {
        super(firstName,lastName,age);
        this.games = games;
        this.medals = medals;
    }
    
    wonMedal() {
        this.medals++;
        console.log(this.medals);
    }
}

const ath = new Athlete('john','smith',1990,100,10);
ath.wonMedal();
ath.calculateAge();
console.log(ath);
