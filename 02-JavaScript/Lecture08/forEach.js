const arr = [10, 20, 8, 32, 16]

arr.forEach((i,j,k) => {
   console.log(i,j,k);
})

// Internal Architecture
Array.prototype.customForEach = function(callback){
    for(let i = 0; i < arr.length; i++){
        callback(arr[i],i,arr)
    }
}

arr.customForEach((num, index) => {
    console.log(num, index);
});
