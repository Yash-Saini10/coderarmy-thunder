function counter() {
    
    let count = 0;
  
    function increment() {
        count++;
        console.log(count);
    }

    return increment;
}

const c = counter();
c();
c();


// Use Case

function bank() {    
    let balance = 2000;
    
    return {        
        credit: function(amount) {            
            if (typeof amount === "number")
                balance += amount;        
        },        

        debit: function(amount) {           
            if (typeof amount === "number" && amount <= balance)   
                balance -= amount;       
        },        

        checkBalance: function() {            
            console.log(balance);         
        }    
    };
}

const user = bank();
user.checkBalance();