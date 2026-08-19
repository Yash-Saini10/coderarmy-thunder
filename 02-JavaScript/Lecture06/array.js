// Array Sorting
const names = ["Rohit", "Mohan", "Sohan", "Yash", "Rajat"];
console.log(names.sort());

// Array Reversing
console.log(names.reverse());

// Comparator Function
const num = [10,20,15,25,45,30,110,5];

console.log(num.sort((a,b)=>a-b)); // Ascending Order
console.log(num.sort((a,b)=>b-a)); // Descending Order

// Array Flattening
const arr = [1, 2, [3, 4], [[5, 6]]];
console.log(arr.flat(2));
