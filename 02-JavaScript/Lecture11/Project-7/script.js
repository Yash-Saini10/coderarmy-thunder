const TextArea = document.getElementById('comment');
const TextCount = document.getElementById('textCount');
const WordCount = document.getElementById('wordCount');

TextArea.addEventListener('input', () => {

    const text = TextArea.value;
    const totalText = text.trim();
    const arr = totalText.split(" ").filter(word => word !== "");

    console.log(arr);

    TextCount.textContent = totalText.length;

    if (totalText === "")
        WordCount.textContent = 0;
    else
        WordCount.textContent = arr.length;

})