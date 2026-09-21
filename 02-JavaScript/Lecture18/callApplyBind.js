const user = { 
    name: "Rohit", 
    age: 20,
    amount: 500
};

function increment(umar, paisa) {
    this.age = umar;
    this.amount += paisa;
    console.log(this);
}

increment.call(user, 30, 300);

increment.apply(user, [30, 300]);

const ref = increment.bind(user, 30, 300);
ref();