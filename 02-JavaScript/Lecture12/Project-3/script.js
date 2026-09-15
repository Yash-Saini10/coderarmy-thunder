const h2 = document.querySelector('h2');

setInterval(() => {
    let time = new Date();
    h2.textContent = time.toLocaleTimeString();
}, 1000);