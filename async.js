/* What is async and await?
async

Used before a function.

It makes the function return a Promise automatically.

await

Used inside an async function.

It waits for a Promise to complete before moving to the next line.

Makes asynchronous code look like normal step-by-step code. */

async function demo() {
  return "Hello!";
}

demo().then(result => console.log(result));

//Example with await (Wait for a Promise)
function getData() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Data Loaded"), 2000);
  });
}

async function showData() {
  console.log("Fetching...");
  let result = await getData();  // waits 2 seconds
  console.log(result);
}

showData();

/* Real-World Example: Fetch API */
async function fetchUsers() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let users = await response.json();

  console.log("Users:", users);
}

fetchUsers();


/* Why Use Async/Await?
✔ Makes code easier to read
✔ Looks like normal synchronous code
✔ Avoids callback hell
✔ Better error handling */