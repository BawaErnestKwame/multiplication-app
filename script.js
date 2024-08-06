const num1 = Math.ceil(Math.random() * 20);
const num2 = Math.ceil(Math.random() * 20);

const questionEl = document.getElementById("quetions"); // Corrected the ID to match HTML
const input = document.getElementById("input");
const formEl = document.getElementById("form");
const scoreEl = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score")) || 0;

scoreEl.innerText = `Score: ${score}`;

questionEl.innerText = `What is ${num1} multiply by ${num2}?`;

let correctAns = num1 * num2;

formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    const userAns = +input.value;

    if (userAns === correctAns) {
        score++;
    } else {
        score--;
    }

    updateLocalStorage();
    scoreEl.innerText = `Score: ${score}`;
    input.value = "";
    generateNewQuestion();
});

function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score));
}

function generateNewQuestion() {
    const newNum1 = Math.ceil(Math.random() * 20);
    const newNum2 = Math.ceil(Math.random() * 20);
    questionEl.innerText = `What is ${newNum1} multiply by ${newNum2}?`;
    correctAns = newNum1 * newNum2;
}
