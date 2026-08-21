const arr = [10, 20, 8, 32, 16]

const answer = arr.filter((num) => num > 10);
console.log(answer);

// Internal Architecture
Array.prototype.customFilter = function(callback){
    const answer = [];
    for(let num of this){
        if(callback(num))
            answer.push(num);
    }
    return answer;
}

const num = [-10, 30, 40, 50, -20, 25, 35]
const ans = num.customFilter((num)=> num > 10)
console.log(ans);
