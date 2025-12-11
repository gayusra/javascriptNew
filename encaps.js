class BankAccount {
    #balance = 0; // private variable

    constructor(name) {
        this.name = name;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        }
    }

    withdraw(amount) {
        if (amount <= this.#balance) {
            this.#balance -= amount;
        } else {
            console.log("Insufficient balance");
        }
    }

    getBalance() {
        return this.#balance; // controlled access
    }
}

const acc = new BankAccount("Kavitha");
acc.deposit(1000);
acc.withdraw(300);

console.log(acc.getBalance()); // 700

console.log(acc.balance); 
// ❌ undefined (because balance is private)

/* 
What’s happening?

#balance is private → cannot be accessed outside.

Access only via methods (deposit, withdraw, getBalance).

Prevents others from manually editing balance:
acc.balance = 999999; ❌ NOT POSSIBLE */