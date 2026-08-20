function add(num1, num2){
    return num1 + num2;
}

function sub(num1, num2){
    return num1 - num2;
}

function mul(num1, num2){
    return num1 * num2;
}


function calculator(num1, num2, operation){
    const result = operation(num1, num2);
    console.log(`Result: ${result}`);
}

calculator(2, 4, mul);
calculator(5, 3, add);

calculator(10, 2, function(a,b){
    return a / b;
});
