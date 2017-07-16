var Person =function(name, yearOfBirth, job) {
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
