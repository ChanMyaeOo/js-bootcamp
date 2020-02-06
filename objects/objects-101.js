let person = {
  name: 'Chan Myae Oo',
  age: 24,
  location: 'Mogok, Myanmar'
};

console.log(`${person.name} is ${person.age} and lives in ${person.location}`);

person.age = person.age + 1; // change person object's property

console.log(`${person.name} is ${person.age} and lives in ${person.location}`);
