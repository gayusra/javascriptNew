//math.round -- round the nearest whole number
//console.log(Math.round(4.4))

let a = 4.6
console.log(Math.round(a))

//Math.floor -- rounds down to the nearest interger
console.log(Math.floor(6.6))

//Math.ceil -- rounds up to the nearest integer
/console.log(Math.ceil(2.3))

console.log(Math.max(1,4,5,8,9))
console.log(Math.min(1,4,5,8,9)) 

//console.log(Math.random())

//console.log(Math.random()*5)
console.log(Math.floor(Math.random()*20)+1) 

let dice = Math.floor(Math.random()*6) +1
console.log('you rolled dice:',dice)

let toss = Math.floor(Math.random()*2) +1

if(toss === 1){
    console.log('head')
}else{
    console.log('Tail')
} 

/* let nums = [1,2,3,4,5]
let reversed = nums.reverse()
console.log(reversed) */

/* let num = [1,2,3,4,5]
let reversed = []

for(let i = num.length-1; i>=0;i--){
    reversed.push(num[i])
}
console.log(reversed) */

//Generate a random 4-digit OTP using Math.random.
//Standard 4-digit OTP (1000 to 9999)
function generateOTP() {
  return Math.floor(1000 + Math.random() * 9000);
}

console.log(generateOTP()); 

//How it works:
/* Math.random() → gives a value between 0 and 1

Math.random() * 9000 → gives a value between 0 and 9000

1000 + ... → shifts it to 1000–9999 range

Math.floor() → removes decimals */


//Random Password Generator
 function generatepassword(length){
      const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$&!";
      let password = ""

      for(let i = 0; i<length; i++){
        let randomIndex = Math.floor(Math.random()* characters.length)
        password += characters[randomIndex]
      }
      return password
}

console.log(generatepassword(5)) 

//how its work

/* Math.random() generates a random number between 0 and 1

Example: 0.55672…

Multiply by characters.length

Example:
0.55672 × 68 = 37.854 → random index

Math.floor() converts it to whole number

37 → character at index 37

Loop repeats until the password reaches your required length.
*/