function Person(name, age) {
  this.name = name;
  this.age = age;
}

const p1 = new Person("Rahul", 22);
const p2 = new Person("Priya", 20);


/* function Student(name, course) {
  this.name = name;
  this.course = course;

  this.greet = function () {
    return `Hi, I am ${this.name} studying ${this.course}`;
  };
}

const s1 = new Student("Arun", "Full Stack");
console.log(s1.greet()); // Hi, I am Arun studying Full Stack

const s2 = new Student("Meena", "Data Science");
console.log(s2.greet());


 */
//What is a Constructor Method in JavaScript
//Basic Example
class Student {
  constructor(name, age) {
    this.name = name;   // property 1
    this.age = age;     // property 2
  }
}

const s1 = new Student("John", 20);
const s2 = new Student("Aisha", 22);

console.log(s1.name); // John
console.log(s2.age);  // 22

//Constructor with a Method
class Car {
  constructor(model, year) {
    this.model = model;
    this.year = year;
  }

  start() {
    console.log(`${this.model} is starting...`);
  }
}

const car1 = new Car("Audi", 2020);
car1.start();

//Constructor with Default Values
class User {
  constructor(name = "Guest", role = "Viewer") {
    this.name = name;
    this.role = role;
  }
}

const u1 = new User();
const u2 = new User("Rahul", "Admin");

console.log(u1); // Guest Viewer
console.log(u2); // Rahul Admin

