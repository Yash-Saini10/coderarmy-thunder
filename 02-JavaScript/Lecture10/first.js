// Old Method
const element = document.getElementById('first');

element.onclick = function handleClick(){
    element.textContent = "Hello Coder Army";
    element.style.backgroundColor = "skyblue";
}


// Modern Method
const newElement = document.getElementById('second');

newElement.addEventListener('click',() => {
    newElement.textContent = "Hello Duniya!";
})