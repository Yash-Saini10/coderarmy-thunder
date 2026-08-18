// Primitive vs. Non-Primitive Data Types

// 1. Copy by Value vs. Copy by Reference
let firstNumber = 10;
let secondNumber = firstNumber;
firstNumber = 20;
console.log(firstNumber, secondNumber);


let obj1 = {
    name: "Rohit",
    age: 20
}
let obj2 = obj1;
console.log(obj2);


// 2. Comparison: Value vs. Reference
let a = 10;
let b = 10;
console.log(a==b);


let person1 = { 
    name: "Rohit", 
    age: 20 
}

let person2 = { 
    name: "Rohit", 
    age: 20 
}
console.log(person1 == person2);


// 3. Mutability
let c = 10;
c = 20;
console.log(c);


let user1 = { 
    name: "Rohit", 
    age: 20 
};
let user2 = user1;
user2.name = "Aditya";
console.log(user1);



// The const Behavior
const obj = {
    name: "Rohit",
    age: 20
}
obj.age = 30;
console.log(obj);



// The var Keyword (Legacy Method)

// Hoisting
console.log(d);
var d =  10;

// Lack of Block Scope
if(true) {
  var e = 10;
}
console.log(e);
