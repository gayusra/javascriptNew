class Animal {
    eat() {
        console.log("Animal is eating");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Dog is barking");
    }
}

const d = new Dog();
d.eat();  // Inherited from Animal
d.bark(); // Own method


//explantion
/* Dog class extends Animal

Dog gets everything from Animal (like eat)

Plus, Dog has its own function bark */