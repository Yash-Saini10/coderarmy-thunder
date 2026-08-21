const arr = [10,20,30,40,50];

const sum = arr.reduce((accumulator,num) => {
    return accumulator + num;
},0);

console.log(sum);


const ans = arr.reduce((acc,num) => {
    return acc * num;
},1);

console.log(ans);
