const parent = document.getElementById("parent");
parent.addEventListener('click',(e)=>{
    e.target.textContent = "I am clicked";
})