//math.round -- round the nearest whole number

//console.log(Math.round(4.4))

//Math.floor -- rounds down to the nearest interger
//console.log(Math.floor(6.6))

//Math.ceil -- rounds up to the nearest integer
/* console.log(Math.ceil(2.3))

console.log(Math.max(1,4,5,8,9))
console.log(Math.min(1,4,5,8,9)) */

//console.log(Math.random()*10)
/* console.log(Math.floor(Math.random()*100)+1) */

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

let num = [1,2,3,4,5]
let reversed = []

for(let i = num.length-1; i>=0;i--){
    reversed.push(num[i])
}
console.log(reversed)