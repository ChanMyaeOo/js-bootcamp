const Person = function(firstName, lastName, age, likes = []) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.likes = likes;
};

Person.prototype.getBio = function() {
  let bio = `${this.firstName} is ${this.age}`;
  this.likes.forEach(like => {
    bio += ` ${this.firstName} likes ${like}`;
  });
  return bio;
};

Person.prototype.setName = function(fullName) {
  let name = fullName.split(' ');
  this.firstName = name[0];
  this.lastName = name[1];
};
const person1 = new Person('Jen', 'Ledge', 27, ['travelling', 'hiking']);
console.log(person1.getBio());

const person2 = new Person('Alex', 'Cohan', 25);
person2.setName('Brad Johnson');
console.log(person2.getBio());
