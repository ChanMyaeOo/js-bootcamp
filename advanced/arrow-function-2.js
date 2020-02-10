const add = (a, b) => {
  return arguments[0] + arguments[1];
};

// console.log(add(1, 2, 3, 4));

const person = {
  name: 'Peter',
  greet() {
    console.log(`My name is ${this.name}`);
  }
};

person.greet();
