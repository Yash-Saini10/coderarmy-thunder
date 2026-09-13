const input = document.querySelector('input');
const parent = document.getElementById('parent');

parent.addEventListener('click', (e) => {
    if (e.target.id === 'C') {
        input.value = '';
    } else if (e.target.id === '=') {
        input.value = math.evaluate(input.value);
    } else {
        input.value += e.target.id;
    }
})