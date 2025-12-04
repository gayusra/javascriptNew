/* What are Classes in JavaScript?

A class is a blueprint/template used to create objects.

It helps you organize code using properties (variables) and methods (functions).

Classes were introduced in ES6 (2015). */

//Basic Class Example
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, I am ${this.name}`);
  }
}

const p1 = new Person("Rahul", 22);
p1.greet();

/* Explanation:

constructor() runs automatically when an object is created.

this.name and this.age belong to the object.

greet() is a class method. */

/* Creating Multiple Objects from One Class */
class Car {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }
}

const car1 = new Car("BMW", "Black");
const car2 = new Car("Audi", "White");

console.log(car1);
console.log(car2);

//Adding Methods Inside Class
class Calculator {
  add(a, b) {
    return a + b;
  }

  multiply(a, b) {
    return a * b;
  }
}

const calc = new Calculator();
console.log(calc.add(5, 3));      // 8
console.log(calc.multiply(4, 2)); // 8
