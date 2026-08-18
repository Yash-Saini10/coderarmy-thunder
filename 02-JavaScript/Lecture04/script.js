// Bitwise Operators

let a = 8;
let b = 5;

console.log(a&b);
console.log(a|b);
console.log(a^b);
console.log(~a);
console.log(a<<1);
console.log(a>>1);
console.log(a>>>1);


// The Classical problem
console.log(0.1 + 0.2);


// Conditional Statements

// if Statement
let age = 18;
if(age >= 18) {
    console.log("Eligible to vote.");
}

// if-else Statement
let num = 10;
if(num >= 0) {
    console.log("Number is positive.");
} else {
    console.log("Number is negative.");
}

// if-else if Ladder
let marks = 90;
if(marks >= 90) {
    console.log("Grade A");
} else if(marks >= 90) {
    console.log("Grade B");
} else if(marks >= 50) {
    console.log("Grade C");
} else {
    console.log("Fail");
}


// Loops

// for loop
for(let i = 1; i <= 10; i++) {
    console.log(i);
}

// while loop
let i = 1;
while(i <= 10) {
    console.log(i);
    i++;
}

// do-while loop
let j = 1;
do{
    console.log(j);
    j++;
}while(j <= 10);


// Numbers

// Creating Numbers
let num1 = 10; // Standard Literal
let num2 = new Number (10); // Object Constructor


// Specific Numeric Values
console.log(1/0); // Infinity
console.log(-1/0); // -Infinity
console.log('Hello'/2); // NaN


// Important Number Methods
let pi = 3.14159265359;

console.log(isNaN(pi));
console.log(pi.toFixed(2));
console.log(pi.toPrecision(3));
console.log(pi.toString());


// The Math Object

// Constants
console.log(Math.PI);
console.log(Math.E);


// Rounding
console.log(Math.round(3.14));
console.log(Math.floor(3.14));
console.log(Math.ceil(3.14));
console.log(Math.trunc(3.14));


// Other Commom Functions
console.log(Math.abs(3.14));
console.log(Math.pow(3,3));
console.log(Math.sqrt(4));
console.log(Math.cbrt(16));
console.log(Math.max(10, 20, 30, 40, 50));
console.log(Math.min(10, 20, 30, 40, 50));
console.log(Math.floor(Math.random() * 10));


// Strings

// Creating Strings
let str1 = "Rohit Negi";
let str2 = 'Hello Coder Army';
let str3 = `This is a template literal.`;
console.log(str3);

let str = "JavaScript is powerful";

// Key Properties and Methods
console.log(str.length); 
console.log(str.toLowerCase()); 
console.log(str.toUpperCase());
console.log(str.indexOf("Script"));
console.log(str.lastIndexOf("Script"));
console.log(str.includes("Script"));
console.log(str.slice(4,10));
console.log(str.substring(4,10));
console.log(str.replace("powerful", "great"));
console.log(str.replaceAll("powerful", "great"));
