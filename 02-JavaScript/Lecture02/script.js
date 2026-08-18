// Variables


// let
let a = 10;
let b = 10.6;
b = 30;
let str = "Hello";
console.log(a, b, str);

// const
const c = 30;
console.log(c);



// Data Types


// Primitive Data Types

// Number
let firstNumber = 20;
let secondNumber = 33.33;

console.log(firstNumber, secondNumber);

// String
let firstString = "Rohit Negi";
let secondString = 'Coder Army';
let thirdString = `Hello ${secondString}`;
console.log(firstString, secondString, thirdString);

// Boolean
let firstBoolean = true;
let secondBoolean = false;
console.log(firstBoolean, secondBoolean);

// Undefined
let notAssigned;
console.log(notAssigned);

// null
let emptyValue = null;
console.log(emptyValue);

// BigInt
let bigNum = 12345678987654321n;
console.log(bigNum);

// Symbol
let uniqueKey = Symbol("Rohit");
console.log(uniqueKey);


// Primitive Data Types

// Array
let arr = [10, 20, 30, "Rohit", true, 90];
console.log(arr);

// Object
let person = {
    name: "Rohit",
    age: 20,
    city: "Dwarka"
}
console.log(person);

// Function
function greet() {
    console.log("Hello World!");
}

greet();



// typeof
console.log(typeof firstNumber);
console.log(typeof firstString);
console.log(typeof firstBoolean);
console.log(typeof notAssigned);
console.log(typeof emptyValue);
console.log(typeof bigNum);
console.log(typeof uniqueKey);
console.log(typeof arr);
console.log(typeof person);
console.log(typeof function() {});
