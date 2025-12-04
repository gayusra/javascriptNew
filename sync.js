//sync eg

console.log("Step 1");
console.log("Step 2");
console.log("Step 3");

//Code Example (Asynchronous)
console.log("Start");

setTimeout(() => {
  console.log("This takes 2 seconds");
}, 2000);

console.log("End");

//Example with API Call (Asynchronous)
console.log("Fetching data...");

fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => console.log("Received:", data));

console.log("Continue other work...");

