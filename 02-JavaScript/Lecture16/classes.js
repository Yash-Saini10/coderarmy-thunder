class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hi ${this.name}`);
    }
};

class Customer extends Person {
    constructor (name, age, balance, city) {
        super(name, age);
        this.balance = balance;
        this.city = city;
    }
};

const user1 = new Customer ("Rohit", 20, 450, "Dwarka");
console.log(user1);