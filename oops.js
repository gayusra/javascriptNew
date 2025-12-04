//claass eg
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, I am ${this.name}`);
  }
}

const p1 = new Person("Rahul", 22);
p1.greet();

//object
const car = {
  brand: "BMW",
  color: "Black",
  start() {
    console.log("Car started!");
  }
};

car.start();

//Encapsulation

class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const acc = new BankAccount();
acc.deposit(1000);
console.log(acc.getBalance()); // 1000


