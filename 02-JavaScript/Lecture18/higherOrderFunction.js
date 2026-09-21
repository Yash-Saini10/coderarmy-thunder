function increment(amount) {

    function mul(num) {
        console.log(num * amount);
    }

    return mul;
}

increment(30)(10);