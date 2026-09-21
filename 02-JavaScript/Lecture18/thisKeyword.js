const user = {    
    name: "Rohit",    
    greet: function() {        
        console.log(this);    
    }
};

user.greet();


// Arrow Function and this Keyword

const watch = {    
    timer: 0,    
    stopWatch: function() {        
        setInterval(() => {           
            this.timer++;            
            console.log(this.timer);        
        }, 1000);     
    }
};

watch.stopWatch();