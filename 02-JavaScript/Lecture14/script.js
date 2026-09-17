const user = {
    name: "Rohit",
    age: 20
}

// Object to JSON
const a = JSON.stringify(user);
console.log(a);

// JSON to Object
const b = JSON.parse(a);
console.log(b);