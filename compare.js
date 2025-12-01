let a = 5 == "5"   // true  (values are same)

//Strict Equal to ( === )

5 === "5"   // false  (types are different)
5 === 5     // true

//Not Equal ( != )
10 != "10"   // false (same value)
10 != 5      // true

//Strict Not Equal ( !== )
10 !== "10"   // true (type different)
10 !== 10     // false

//Greater Than ( > )
8 > 5   // true
3 > 10  // false

//Less Than ( < )
3 < 7   // true
9 < 4   // false

//Greater Than or Equal ( >= )
10 >= 10   // true
8 >= 12    // false

let age = 18;

console.log(age >= 18); // true
console.log(age == "18"); // true
console.log(age === "18"); // false
console.log(age !== 20); // true


