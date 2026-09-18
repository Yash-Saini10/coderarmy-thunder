const obj1 = {
    name: "Rohit",
    age: 20,
    city: "Dwarka"
}

const obj2 = {
    balance: 450
}

obj2.__proto__ = obj1;
console.log(obj2.name);