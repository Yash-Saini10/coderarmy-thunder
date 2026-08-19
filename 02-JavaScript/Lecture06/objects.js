const person = {
    name: "Rohit",
    age: 20,
    city: "Kotdwar",
    email: "negi@gmail.com",
    amount: 500
}


// How is Data Received from Backend
const users = [ {
    name: "Mohit",
    age: 25,
    city: "Dwarka",
    email: "mohit@gmail.com",
    amount: 500
},

{
    name: "Rohit",
    age: 20,
    city: "Kotdwar",
    email: "negi@gmail.com",
    amount: 1000
}
]


// Accessing & Modifying Object Properties
let user = {
    name: "Rohit",
    age: 20,
    city: "Kotdwar",
    email: "negi@gmail.com",
    amount: 500
}

// Dot Notation
console.log(user.name);
console.log(user.age);

// Bracket Notation
console.log(user["city"]);
console.log(user["amount"]);

// Creating a New Property
user.country = "India";
user["aadhar"] = 123456;

// Deleting an existing Property
delete user.age;


// Complex Objects (Methods, Arrays, Nested Objects)
const newUser = {
    name: "Rohit",
    age: 20,
    email: "negi@gmail.com",
    amount: 1000,
    hobbies: ["cricket", "music"],
    greet: function() {
        console.log("Hello");
    },
    address: {
     city: "Dwarka",
     pincode: 110075
    }
};

newUser.greet();
console.log(newUser.hobbies);
console.log(newUser.address.city);


// Built-in Object Methods
const customer = {
    name: "Rohit",
    age: 20,
    accountNumber: 124554,
    balance: 450,
    city: "Kotdwar",
};

// Print all keys
console.log(Object.keys(customer));

// Print all values
console.log(Object.values(customer));

// Print both keys and values
console.log(Object.entries(customer));


// Iterating Over Objects

const customerKeys = Object.keys(customer);
for(const key of customerKeys){
    console.log(key);
}


const customerValues = Object.values(customer);
for(const value of customerValues){
    console.log(value);
}


const customerKeysForValues = Object.keys(customer);
for(const key of customerKeysForValues){
    console.log(key, customer[key]);
}


for(const key of Object.keys(customer)){
    console.log(key);
}


for(const value of Object.values(customer)){
    console.log(value);
}


for(const [key, value] of Object.entries(customer)){
    console.log(key, value);
}


// Copy by Reference Mechanics
const obj1 = {
    name: "Rohit"
}
const obj2 = obj1;
obj2.name = "Mohit";

console.log(obj1);


// Object Destructuring
const newCustomer = {
    name: "Rohit",
    age: 20,
    hobbies: ["Cricket", "Music"],
    address: {
        city: "Kotdwar",
        pincode: 246149
    }
}

const {name, age} = newCustomer;
console.log(name, age);


// Shallow Copy
const shallowCopy = {...newCustomer};
shallowCopy.name = "Mohan";
shallowCopy.hobbies.push("Reading");
shallowCopy.address.pincode = 123456;
console.log(newCustomer);


// Deep Copy
const deepCopy = structuredClone(newCustomer);
deepCopy.name = "Sohan";
deepCopy.address.city = "Dwarka";
deepCopy.address.pincode = 110075;
console.log(deepCopy);


// for in Loop
for(const key in customer){
    console.log(key, customer[key]);
}
