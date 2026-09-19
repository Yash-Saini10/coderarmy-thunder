function placeOrder(callback) {
    console.log("Payment is in progress.");
    setTimeout(() => {
        console.log("Payment is completed.");
        callback(prepareOrder);
    },3000)
}

function prepareOrder(callback) {
    console.log("Restaurent received the order and preparing it.");
    setTimeout(() => {
        console.log("Your order is prepared now.");
        callback(pickupOrder);
    },3000)
}

function pickupOrder(callback) {
    console.log("Delivery boy is on the way to pickup order.");
    setTimeout(() => {
        console.log("Delivery boy reached the restaurent.");
        callback(deliverOrder);
    },3000)
}

function deliverOrder() {
    console.log("Delivery boy picked the order from restaurent.");
    setTimeout(() => {
        console.log("Order delivered.");
    },3000)
}

placeOrder(() => {
    prepareOrder(() => {
        pickupOrder(() => {
            deliverOrder();
        });
    });
});
