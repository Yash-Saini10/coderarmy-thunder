const orderDetail = {
    orderId: 12314,
    food: ["Pizza", "Burger"],
    price: 900,
    paymentStatus: false,
    tokenAssign: false,
    restaurantLocation: "New Delhi",
    customerLocation: "Dwarka",
    pickingOrder: false, 
    deliveredOrder: false
}

function placeOrder(orderDetail) {
    console.log(`Payment of ${orderDetail.price} is in progress.`);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Payment is completed.");
            orderDetail.paymentStatus = true;
            resolve(orderDetail);
        },3000)
    })
}

function prepareOrder(orderDetail) {
    console.log(`Restaurent received the order and preparing ${orderDetail.food}.`);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Your order is prepared now.");
            orderDetail.tokenAssign = 123;
            resolve(orderDetail);
        },3000)
    })
}

function pickupOrder(orderDetail) {
    console.log(`Delivery boy is on the way to pick order from ${orderDetail.restaurantLocation} restaurant.`);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Delivery boy reached the restaurent.");
            orderDetail.pickingOrder = true;
            resolve(orderDetail);
        },3000)
    })
}

function deliverOrder(orderDetail) {
    console.log(`Delivery boy picked the order from restaurent and delivering it to ${orderDetail.customerLocation}.`);
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Order delivered.");
            orderDetail.deliveredOrder = true;
            resolve(orderDetail);
        },3000)
    })
}

placeOrder(orderDetail, (orderDetail) => {
    prepareOrder(orderDetail, (orderDetail) => {
        pickupOrder(orderDetail, (orderDetail) => {
            deliverOrder(orderDetail);
        });
    });
});

placeOrder(orderDetail)
.then((orderDetail) => {
    return prepareOrder(orderDetail);
})
.then((orderDetail) => {
    return pickupOrder(orderDetail);
})
.then((orderDetail) => {
    return deliverOrder(orderDetail);
})
.then((orderDetail) => {
    console.log(orderDetail);
})