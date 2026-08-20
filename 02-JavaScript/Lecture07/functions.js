// Method 1: Standard Function Declarations (Named Functions)

// Basic Function
function greeting(){
    console.log("Hello World!");
}
greeting();

// Function with Parameters and Arguments
function addTwoNumbers(num1, num2){
    return num1 + num2;
}
console.log(addTwoNumbers(2,3));

// Function utilizing the Rest Operator for infinite arguments
function addManyNumbers(...arr){
    let sum = 0;
    for(const num of arr) {
        sum += num;
    }
    return sum;
}
console.log(addManyNumbers(10, 20, 30, 40, 50));


// Method 2: Function Expressions (Anonymous Functions)
const greet = function(){
    console.log("Hello World!");
}
greet();

const addNumber = function(num1,num2){
    return num1+num2;
}
console.log(addNumber(2,3));


// Method 3: Arrow Functions (Modern ES6)
const hello = () => {
    console.log("Hello World!");
}
hello();


const sum = (num1, num2) => {
    return num1 + num2;
}
console.log(sum(5,5));


const mul = (num1, num2) => num1 * num2;
console.log(mul(5,5));


const square = num => num * num;
console.log(square(4));


const user = () => ({name:"Rohit", age:20})
console.log(user());


// Method 4: IIFE (Immediately Invoked Function Expression)
(function hello(){
    console.log("Hello World!");
})();


// Callback Functions
function morning() {
    console.log("Good Morning");
}

function afternoon(callback) {
    callback();
    console.log("Good Afternoon");
}

function evening() {
    console.log("Good Evening");
}

afternoon(morning);
evening();


// Real-World Callbacks
function zomatoRestaurant(){
    console.log("Restaurant is preparing the order...");
}

function blinkitWarehouse(){
    console.log("Packing the order for user...");
}


function payment(amount, callback){
    console.log(`Processing payment of ₹${amount}...`);
    console.log("Payment is done!");
    callback();
}

payment(500,zomatoRestaurant);
payment(1000,blinkitWarehouse);
