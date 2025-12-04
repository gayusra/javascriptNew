//Anonymous Function stored in a variable

let add = function(a, b) {
  return a + b;
};

console.log(add(5, 3)); // Output: 8

/*
The function has no name.

It is stored inside a variable add.

*/

//Arrow Functions in JavaScript (ES6)
//Arrow functions are a shorter way to write functions.
let functionName = (parameters) => {
  // statements
};

/* Short and clean

Often used in modern JS

Better for callbacks */

//Simple Arrow Function
let greet = () => {
  console.log("Welcome Students!");
};

greet();

/* function add(a,b){
    return a+b
}

console.log(add(3,3)) */
