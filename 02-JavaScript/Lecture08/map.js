const arr = [1, 2, 4, 7, 8, 3];

const newArr = arr.map((num) => num*5);
console.log(newArr);

// Internal Architecture
Array.prototype.customMap = function(callback) {
    const result = [];
    for(let num of this){
        let temp = callback(num);
        result.push(temp);
    }
    return result;
}

const num = [1, 3, 5, 2, 6, 7, 4];

const ans = num.customMap((num) => num*5);
console.log(ans);
