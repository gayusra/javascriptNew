//switch statement
/* A switch statement in JavaScript is used to execute one block of code among many options, based on the value of a given expression.

It’s a cleaner and more readable alternative to writing multiple if...else if...else statements.

  🔹 Syntax:
  switch(expression) {
  case value1:
    // Code to execute if expression === value1
    break;
  case value2:
    // Code to execute if expression === value2
    break;
  default:
    // Code to execute if none of the above cases match
}



*/
/* 
let day = 4;
let dayName;

switch(day) {
  case 1:
    dayName = "Monday";
   break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Invalid day";
}

console.log(dayName);  */// Output: Wednesday




    //Grade Evaluation
let grade = "D";

 switch(grade) {
  case "A":
    console.log("Excellent! 🏆");
    break;
  case "B":
    console.log("Good job 👍");
    break;
  case "C":
    console.log("You passed 🙂");
    break;
  case "D":
    console.log("Needs improvement 😕");
    break;
  case "F":
    console.log("Failed 😞");
    break;
  default:
    console.log("Invalid grade");
} 

//Greeting Based on Time
let time = 17; // 14 means 2 PM

switch(true) {
  case (time < 12):
    console.log("Good Morning!");
    break;
  case (time < 16):
    console.log("Good Afternoon!");
    break;
  default:
    console.log("Good Evening!");
}



