fetch("https://api.github.com/users?per_page=20")
.then((response)=>{
    if(!response.ok)
        throw new Error("Unable to fetch data");
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("I am final step");
})


// How to create a promise
const p1 = new Promise((resolve,reject) => {
    resolve("Hello");
})

p1.then((response)=>{
    console.log(response);
})
.catch((error)=>{
    console.log(error);
})