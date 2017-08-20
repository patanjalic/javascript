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
*/

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