const answers = {
    q1:  "Sachin Tendulkar",
    q2:  "11",
    q3:  "West Indies",
    q4:  "50",
    q5:  "Brian Lara",
    q6:  "6",
    q7:  "MS Dhoni",
    q8:  "Leg Before Wicket",
    q9:  "Muttiah Muralitharan",
    q10: "6"
};

const form   = document.getElementById('quizForm');
const result = document.getElementById('result');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let score = 0;

    for (let key in answers) {
        const selected = form.querySelector(`input[name="${key}"]:checked`);
        if (selected && selected.value === answers[key]) {
            score++;
        }
    }

    result.textContent = `You scored ${score} out of 10!`;
});