//Memory Allocation
//When you create a variable, object, or function → JavaScript allocates memory.
let a = 10;          // number allocated
let name = "John";   // string allocated

let user = {         // object allocated
  age: 20
};

//Memory Usage (Read + Write)  Your program uses the stored memory.
let x = 5;
let y = x + 10;  // using memory to calculate and store result

/*
 Garbage Collection (Automatic Cleanup)

JavaScript removes values from memory when they are no longer needed.

It uses a method called mark-and-sweep, which checks:

✔ Is a value still reachable?
❌ If not reachable → remove from memory

*/

