const button = document.querySelector('button');

function handle(){
    button.textContent = "Clicked";
    button.removeEventListener('click',handle);
}

button.addEventListener('click',handle);