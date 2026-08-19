// Problem
let marks1 = 10;
let marks2 = 20;
let marks3 = 30;


// Array
let marks = [10, 20, 30, 40, 50];
console.log(marks);

marks[0] = 15;
console.log(marks.length);

for(let i = 0; i < marks.length; i++) {
    console.log(marks[i]);
}

// Heterogeneous Nature
let userProfile = [10, 20, "Rohit", true];
console.log(userProfile);

// Insert and Delete -> At the end
let num = [10, 20, 30,40, 50];
num.push(60,70);
num.pop();
console.log(num);

// Insert and Delete -> At the start
let nums = [30, 40, 50, 60, 70];
nums.unshift(10, 20);
nums.shift();
console.log(nums);

// for of loop
for(let x of nums) {
    console.log(x);
}

// slice
let scores = [10, 20, 30, 40, 50, 60, 70];
console.log(scores.slice(2,4));

// splice
let points = [10, 20, 30, 40, 50, 60, 70]
console.log(points.splice(2,4));
console.log(points);

let rewards = [10, 20, 50];
rewards.splice(2,0,30,40);
console.log(rewards);

// Copy by Reference Mechanics
let arr1 = [10,20,30,40,50];
let arr2 = arr1;
console.log(arr2);


// 2D Array
let arr = [[1,2,3],[4,5,6],[7,8,9]];
console.log(arr);
console.log(arr[0].length);

for(let row = 0; row < arr.length; row++) {
    for(let col = 0; col < arr[row].length; col++){
        console.log(arr[row][col]);
    }
}

for (let row of arr) {
    for (let element of row) {
        console.log(element);
    }
}

// 3D Array
let cube = [[[1, 2, 3],[4, 5, 6]],[[7, 8, 9],[10, 11, 12]]];
console.log(cube);

for (let row of cube) {
    for (let col of row) {
        for (let element of col){
            console.log(element);
        }
    }
}

// Merging Arrays: concat()
const nums1 = [10,20,30,40,50,[20,30,70]];
const nums2 = [42,12,54,11];
console.log(nums1.concat(nums2));

// Merging Arrays: Spread Operator
let num1 = [10, 20];
let num2 = [30, 40];
const spread_num = [...num1, ...num2];
console.log(spread_num);

// Array Destructuring & The Rest Operator
let record = [10, "Rohit", "Aditya"];
const [id, ...names] = record;
console.log(id, names);

// Utility and Search Methods
const users = ["Rohit","Mohit","Aditya"];
console.log(users.join(", "))
console.log(users.indexOf("Rohit"));
console.log(users.includes("Rohit"));
