const parent = document.getElementById('root');
const body = document.querySelector('body');

parent.addEventListener('dblclick', (e) => {
    body.style.backgroundColor = e.target.id;
})