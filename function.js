/* What is a Function in JavaScript?

A function in JavaScript is like a small machine that performs a specific task.
You write it once, and you can use (or call) it many times.

It helps make your code reusable, organized, and easy to read. */

//Syntax of a Function
/* function functionName() {
  // code to execute
} */

//Why Functions are Useful

/* Avoid writing the same code again and again.

Keep code clean and easy to understand.

Can be reused anywhere in your program. */

function sayhello(){
    console.log('welcome to the function in js')
}

sayhello()
sayhello()

function apple(){
    console.log('hi i am apple')
}

function banana(){
    console.log('i am banana')
}

apple()
banana()

function greetUser(name){
    console.log('Hi i am ',name)
}
greetUser('banu')

function welcome(name1,name2){
    console.log('welcome both of you',name1,name2,'guyss')
}
welcome('banu','john')

function add(a,b){
    return a+b

}
console.log(add(5,5))

function user(){
    return 'gayuu'
}
console.log(user())


