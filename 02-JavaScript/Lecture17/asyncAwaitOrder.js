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

async function order() {
    const p1 = await placeOrder(orderDetail);
    const p2 = await prepareOrder(p1);
    const p3 = await pickupOrder(p2);
    const p4 = await deliverOrder(p3);
    console.log(p4);
};

order();