const arr = [10, 20, 30, 10, 40, 50, "Rohit", "Mohit", "Rohit", {name: "Rohit", age: 20}, {name: "Rohit", age: 20}];

const s1 = new Set(arr);
console.log(s1);

// Create an Empty Set

const s2 = new Set();

// Add elements to the Set
s2.add(10);
s2.add(20);
s2.add(45);
s2.add(45); // Duplicate primitive value is ignored
console.log(s2);

// Check for an element
console.log(s2.has(20));

// Delete an element
s2.delete(45);
console.log(s2);

// Convert a Set back into an Array
const newArr = [...s2];
console.log(newArr);
