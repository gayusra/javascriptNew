/* Nested functions means a function inside another function.

The inner function can access variables of the outer function — this is called closure. */

/* 
Simple Explanation

A nested function is created when you define one function inside another.
The inner function works only inside the outer function unless you return it. */

//eg
function outerFunction() {
  let message = "Hello from Outer!";

  function innerFunction() {
    console.log(message);  // inner function can use outer variables
  }

  innerFunction(); // calling inside
}

outerFunction();

//Returning a Nested Function
function greeting(name) {
  function sayHello() {
    return "Hello " + name;
  }
  return sayHello;
}

let result = greeting("Rahul");
console.log(result());  

//Counter Button Example
function createCounter() {
  let count = 0;

  function increase() {
    count++;
    console.log("Count:", count);
  }

  return increase;
}

const counter = createCounter();

counter(); // Count: 1
counter(); // Count: 2
counter(); // Count: 3
counter(); // Count: 4
counter(); // Count: 5

//Greeting Message Example
function greet(userName) {
  function message() {
    return "Welcome " + userName + "!";
  }
  return message;
}

const showMessage = greet("John");
console.log(showMessage()); // Welcome John!
 



/* Where Nested Functions Are Used?

Closures

Private variables (data hiding)

Factory functions

Callbacks inside functions

Event listeners inside functions */