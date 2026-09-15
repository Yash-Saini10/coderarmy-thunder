const input = document.getElementById('userPassword');
const p = document.querySelector('p');

input.addEventListener('input', () => {
    const password = input.value;

    let hasCapital = false;
    let hasSmall = false;
    let hasSpecial = false;
    let hasNumber = false;

    for (let i = 0; i < password.length; i++) {
        let ch = password[i];

        if (ch >= 'A' && ch <= 'Z')
            hasCapital = true;
        else if (ch >= 'a' && ch <= 'z')
            hasSmall = true;
        else if (ch >= '0' && ch <= '9')
            hasNumber = true;
        else
            hasSpecial = true;
    }

    if (password.length >= 8 && hasCapital && hasSmall && hasNumber && hasSpecial) {
        p.textContent = "Your password is Strong.";
        p.style.color = "green";
    } else {
        p.textContent = "Your password is Weak.";
        p.style.color = "red";
    }
});