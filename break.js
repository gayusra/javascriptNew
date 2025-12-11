/* for(let z=1; z<=10;z++){
    if(z===5){
        break
    }
    console.log(z)
} 
 */
let i = 1
while(i<=5){
    if(i === 4){
        break
    }
    console.log(i)
    i++
}


//continue

for(let i =1;i<=10;i++){
    if(i===3){
        continue
    }
    console.log(i)
}

//Real-Life Example
//Stop searching when item found (break)

/* let items = ["apple", "banana", "grape", "mango"];

for (let item of items) {
  if (item === "apple") {
    console.log("Found:", item);
    break;
  }
}  */

//Skip unwanted item (continue)
 let items = ["apple", "banana", "grape", "mango"];

for (let item of items) {
  if (item === "banana") {
    continue; // skip banana
  }
  console.log(item);
} 
