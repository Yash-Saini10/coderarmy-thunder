// Arithmetic Operators

console.log(5 + 10);
console.log(5 - 10);
console.log(5 * 10);
console.log(10 / 5);
console.log(10 % 5);
console.log(10 ** 5);

// Assignment Operators

let a = 10;

console.log(a+=5);
console.log(a-=5);
console.log(a*=5);
console.log(a/=5);
console.log(a%=5);
console.log(a**=5);

// Increment and Decrement Operators

let b = 10;
let c = ++b;
console.log(c);
console.log(b);

let d = 10;
let e = d++;
console.log(e);
console.log(d);

// Comparison Operators

console.log(20 > 5);
console.log(20 >= 5);
console.log(20 < 5);
console.log(20 <= 5);
console.log(10 == 10);

console.log("10" == 10);
console.log("10" === 10);
console.log(null == undefined);
console.log(null == 0);
console.log(null == 1);
console.log(null == false);

console.log(null >= 0);
console.log(null <= 0);
console.log(null > 0);
console.log(null < 0);


// Logical Operators

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log(true && "Rohit");
console.log(false && "Rohit");


console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log(true || "Rohit");
console.log(false || "Rohit");



// Conversion

let age = Number("10");
console.log(age);

console.log(parseInt("20px"));
console.log(parseFloat("3.14em"));

let str = "50";
let num = +str;
console.log(num);


console.log(String(30) + '7');


console.log(Boolean("Hello"));
