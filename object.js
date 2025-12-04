//objects

let person = {
    name:'Banu',
    age:23,
    email:'banu@gmail.com'
}



console.log(person)
console.log(person.name)

person.dept='b.com'
console.log(person)

let products = {
    name:'laptop',
    price:50000,
    dimension:{
        color:'black',
        model:'vivobook'
    },
    categories:['phones','laptops','Iphones']
}

console.log(products)
console.log('price:',products.price)
console.log(products.dimension.color)
console.log(products.categories[2])


