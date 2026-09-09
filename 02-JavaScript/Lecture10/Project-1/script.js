const users = [
  {
    name: "Aarav Sharma",
    age: 24,
    photo: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    name: "Priya Verma",
    age: 22,
    photo: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    name: "Rahul Mehta",
    age: 26,
    photo: "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    name: "Sneha Kapoor",
    age: 23,
    photo: "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    name: "Karan Malhotra",
    age: 28,
    photo: "https://randomuser.me/api/portraits/men/5.jpg"
  },
  {
    name: "Ananya Singh",
    age: 21,
    photo: "https://randomuser.me/api/portraits/women/6.jpg"
  },
  {
    name: "Rohan Gupta",
    age: 25,
    photo: "https://randomuser.me/api/portraits/men/7.jpg"
  },
  {
    name: "Neha Joshi",
    age: 27,
    photo: "https://randomuser.me/api/portraits/women/8.jpg"
  },
  {
    name: "Aditya Raj",
    age: 24,
    photo: "https://randomuser.me/api/portraits/men/9.jpg"
  },
  {
    name: "Isha Agarwal",
    age: 22,
    photo: "https://randomuser.me/api/portraits/women/10.jpg"
  }
];

const root = document.getElementById("root");

const arr = [];

users.forEach((people) => {
    const name = document.createElement('h2');
    name.textContent = people.name;
    name.style.margin = '0';
    name.style.fontSize = '1.2rem';

    const age = document.createElement('p');
    age.textContent = people.age;
    age.style.margin = '0'; 
    age.style.color = '#ccc';

    const image = document.createElement('img');
    image.src = people.photo;
    image.style.width = '100%';
    image.style.borderRadius = '8px';

    const detail = document.createElement('div');
    detail.style.display = 'flex';
    detail.style.justifyContent = 'space-between';
    detail.style.alignItems = 'center';
    detail.style.marginTop = '12px';
    detail.append(name, age)

    const card = document.createElement('div');
    card.style.width = '200px';
    card.style.padding = '16px';
    card.style.border = '1px solid #333';
    card.style.borderRadius = '12px';
    card.style.backgroundColor = '#1a1a1a';
    card.style.display = 'flex';
    card.style.flexDirection = 'column';
    card.append(image, detail);

    arr.push(card);
})

root.append(...arr);