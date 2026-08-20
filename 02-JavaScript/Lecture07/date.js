// Method - 1
const now = new Date();
console.log(now.toString());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getFullYear());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());


// Method - 2
const timestamp = Date.now();
console.log(timestamp);

// Converting Timestamp to Date
const date = new Date(timestamp);
console.log(date);


// Custom Date
const myDate = new Date(2026, 6, 1, 0, 0, 0, 0);
console.log(myDate.toString());
