const grandParent = document.getElementById('grandParent')
const parent = document.getElementById('parent')
const child = document.getElementById('child')


grandParent.addEventListener('click', () => {
    console.log("Grand Parent is clicked")
},false)

parent.addEventListener('click', () => {
    console.log("Parent is clicked")
},true)


child.addEventListener('click', () => {
    console.log("Child is clicked")
},false)