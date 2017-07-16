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
*/

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
