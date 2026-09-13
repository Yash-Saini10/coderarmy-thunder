const form = document.querySelector('form');
const input = document.getElementById('income');
const result = document.getElementById('result');

form.addEventListener('input', () => {
    let income = Number(input.value);
    let tax = 0;

    if (income >= 0 && income <= 400000)
        tax = 0;
    else if (income >= 400001 && income <= 800000)
        tax = income * 5 / 100;
    else if (income >= 800001 && income <= 1200000)
        tax = income * 10 / 100;
    else if (income >= 1200001 && income <= 1600000)
        tax = income * 15 / 100;
    else if (income >= 1600001 && income <= 2000000)
        tax = income * 20 / 100;
    else if (income >= 2000001 && income <= 2400000)
        tax = income * 25 / 100;
    else
        tax = income * 30 / 100;

    result.textContent = `Tax: ₹${tax}`;
})