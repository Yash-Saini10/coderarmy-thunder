const Button1 = document.getElementById("buttonFirst");
const Button2 = document.getElementById("buttonSecond");
const Button3 = document.getElementById("buttonThird");
const h2 = document.querySelector('h2');

let count = 0;

Button1.addEventListener('click',()=>{
    count++;
    h2.textContent = count;
})

Button2.addEventListener('click',()=>{
    if(count==0)
        return;
    count--;
    h2.textContent = count;
})

Button3.addEventListener('click',()=>{
    if(count)
        count = 0;
    h2.textContent = 0;
})