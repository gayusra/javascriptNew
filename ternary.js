/* let age = 20;
let result = age >= 18 ? "Adult" : "Minor";
console.log(result); */ // "Adult"


//Example 1: Check if age is 18+
let age = 20;

let result = age >= 18 ? "Adult" : "Minor";

console.log(result); // Adult

///Example 2: Even or Odd Number
let num = 7;

let type = num % 2 === 0 ? "Even" : "Odd";

console.log(type); // Odd

//Example 3: Login Check
let isLoggedIn = false;

let msg = isLoggedIn ? "Welcome User" : "Please Login";

console.log(msg); // Please Login

//Example 4: Nested Ternary (Multiple Conditions)
let marks = 85;

let grade = 
    marks >= 90 ? "A" :
    marks >= 75 ? "B" :
    marks >= 50 ? "C" : "Fail";

console.log(grade); // B

//Example 5: Display Sale Price
let isSale = true;
let price = isSale ? 499 : 799;

console.log(price); // 499

