const arr = [1,3,5,4,2,7,9,8,6];

Array.prototype.sorting = function(callback){

    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length-1; j++){
            if(callback(arr[j],arr[j+1])){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}

arr.sorting((a,b) => a>b);

console.log(arr);
