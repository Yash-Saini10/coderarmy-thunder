function payment(num1) {
   console.log(`Payment of ${num1} is completed`);
}

exports.hello = function() {
    console.log("Hello");
}

module.exports = {payment, hello};