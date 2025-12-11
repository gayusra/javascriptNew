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
const p2 = new Person("Banu",25)
const p3 = new Person('gayu')
p1.greet();
p2.greet()
p3.greet()

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

/* class BankAccount {
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
console.log(acc.getBalance()); */ // 1000


