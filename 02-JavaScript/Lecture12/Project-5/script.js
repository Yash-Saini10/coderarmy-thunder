const h2 = document.querySelector('h2');
const button1 = document.getElementById('buttonFirst');
const button2 = document.getElementById('buttonSecond');
const button3 = document.getElementById('buttonThird');

let timer = 0;
let interval;

button1.addEventListener('click', () => {
    clearInterval(interval);

    interval = setInterval(() => {
        timer++;

        let hours = Math.floor(timer / 3600);
        let minutes = Math.floor((timer % 3600) / 60);
        let seconds = timer % 60;

        h2.textContent = `${String(hours).padStart(2, '0')}:` + `${String(minutes).padStart(2, '0')}:` + `${String(seconds).padStart(2, '0')}`;
    }, 1000)
});

button2.addEventListener('click', () => {
    clearInterval(interval);
    button1.textContent = "Resume";
});

button3.addEventListener('click', () => {
    clearInterval(interval);
    timer = 0;
    h2.textContent = "00:00:00";
    button1.textContent = "Start";
});