// CREATING AND INSERTING A NEW ELEMENT
const element = document.getElementById('first');

const newElement = document.createElement('h2');
newElement.textContent = "Core Technologies";
newElement.id = "second";
newElement.classList.add("classA");

element.after(newElement);


// BUILDING A LIST WITH DOM METHODS
const techList = document.getElementById('tech-list');

const listItem1 = document.createElement('li');
listItem1.textContent = "Security";

const listItem2 = document.createElement('li');
listItem2.textContent = "DevOps";

const listItem3 = document.createElement('li');
listItem3.textContent = "System Design";

const listItem4 = document.createElement('li');
listItem4.textContent = "Web Development";

techList.append(listItem1);
techList.append(listItem2);
techList.children[1].before(listItem3);
techList.prepend(listItem4);


// GENERATING A LIST FROM BACKEND DATA
const foods = ["Milk", "Soya", "Paneer", "Jalebi", "Samosa", "Chips"];

const arr = [];

const foodList = document.getElementById('food-list');
for(const food of foods){
    const li = document.createElement('li');
    li.textContent = food;
    arr.push(li);
}
foodList.append(...arr);