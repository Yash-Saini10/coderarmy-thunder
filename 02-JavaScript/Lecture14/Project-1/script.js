async function github(number = 20) {
    const response = await fetch(`https://api.github.com/users?per_page=${number}`);
    const data = await response.json();

    const root = document.getElementById('root');
    root.textContent = "";

    for (const user of data) {
        const container = document.createElement('div');
        container.style.textAlign = "center";
        container.style.padding = "10px";
        container.style.background = "#ffffff";
        container.style.borderRadius = "12px";
        container.style.boxShadow = "0 1px 4px rgba(0, 0, 0, 0.07)";
        container.style.width = "180px";

        const img = document.createElement('img');
        img.src = user.avatar_url;
        img.style.width = "120px";
        img.style.height = "120px";
        img.style.borderRadius = "50%";
        img.style.objectFit = "cover";
        img.style.marginBottom = "10px";

        const name = document.createElement('p');
        name.textContent = user.login;
        name.style.margin = "0";
        name.style.fontSize = "15px";
        name.style.fontWeight = "600";
        name.style.color = "#1e293b";

        container.append(img, name);
        root.append(container);
    }
}

github();

const search = document.querySelector('button');
const input = document.querySelector('input');

input.addEventListener('input', () => {
    const number = Number(input.value);
    github(number);
});

search.addEventListener('click', () => {
    const number = Number(input.value);
    github(number);
});