let person = [
  {
    name: 'David',
    age: 22
  },
  {
    name: 'Jen',
    age: 31
  },
  {
    name: 'Charlie',
    age: 24
  }
];

const filteredAge = person.find(person => person.age === 22);
console.log(filteredAge.age);
