const orderDetail = {
    orderId: 12314,
    food: ["Pizza", "Burger"],
    price: 900,
    paymentStatus: false,
    tokenAssign: false,
    restaurantLocation: "New Delhi",
    customerLocation: "Dwarka",
    pickingOrder: false
}

function placeOrder(orderDetail, Callback) {
    console.log(`Payment of ${orderDetail.price} is in progress.`);

    setTimeout(() => {
        console.log("Payment is completed.");
        orderDetail.paymentStatus = true;
        Callback(orderDetail);
    },3000)
}

function prepareOrder(orderDetail, Callback) {
    console.log(`Restaurent received the order and preparing ${orderDetail.food}.`);

    setTimeout(() => {
        console.log("Your order is prepared now.");
        orderDetail.tokenAssign = true;
        Callback(orderDetail);
    },3000)
}

function pickupOrder(orderDetail, Callback) {
    console.log(`Delivery boy is on the way to pick order from ${orderDetail.restaurantLocation} restaurant.`);

    setTimeout(() => {
        console.log("Delivery boy reached the restaurent.");
        orderDetail.pickingOrder = true;
        Callback(orderDetail);
    },3000)
}

function deliverOrder(orderDetail) {
    console.log(`Delivery boy picked the order from restaurent and delivering it to ${orderDetail.customerLocation}.`);

    setTimeout(() => {
        console.log("Order delivered.");
    },3000)
}

placeOrder(orderDetail, (orderDetail) => {
    prepareOrder(orderDetail, (orderDetail) => {
        pickupOrder(orderDetail, (orderDetail) => {
            deliverOrder(orderDetail);
        });
    });
});