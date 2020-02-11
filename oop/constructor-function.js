class Person {
  constructor(firstName, lastName, age, likes = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes;
  }

  getBio() {
    let bio = `${this.firstName} is ${this.age}`;
    this.likes.forEach(like => {
      bio += ` ${this.firstName} likes ${like}`;
    });
    return bio;
  }

  set setName(fullName) {
    let name = fullName.split(' ');
    this.firstName = name[0];
    this.lastName = name[1];
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Employee extends Person {
  constructor(firstName, lastName, age, position, likes = []) {
    super(firstName, lastName, age, likes);
    this.position = position;
  }

  getBio() {
    return `${this.fullName} is a ${this.position}`;
  }

  getRetirement() {
    return 65 - this.age;
  }
}

class Student extends Person {
  constructor(firstName, lastName, age, likes = [], grade) {
    super(firstName, lastName, age, likes);
    this.grade = grade;
  }

  getGrade() {
    return this.grade;
  }

  getBio() {
    return this.grade > 70
      ? `${this.firstName} passed the exam`
      : `${this.firstName} failed the exam`;
  }

  upgradeGrade(grade) {
    this.grade += grade;
  }
}

const employee = new Employee('Chan', 'Myae Oo', 24, 'Programmer', [
  'Gaming',
  'Coding'
]);
employee.setName = 'Gray Smith';
console.log(employee.getBio());

// const employee = new Employee('Chan', 'Myae', 24, 'developer', ['gaming']);
// employee.setName('Jane Smith');
// console.log(employee.getBio());
// console.log(employee.getRetirement());

// const person1 = new Person('Jen', 'Ledge', 27, ['travelling', 'hiking']);
// console.log(person1.getBio());

// const person2 = new Person('Alex', 'Cohan', 25);
// person2.setName('Brad Johnson');
// console.log(person2.getBio());
