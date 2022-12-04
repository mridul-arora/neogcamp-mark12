//common text fields
const outputText = document.querySelector("#outputText");
const outputHint = document.querySelector("#outputHint");

//common functions 
function showText(text) {
    outputText.innerText = text;
}

function showHint(text) {
    outputHint.innerText = text;
}

function hideHint() {
    outputHint.style.display = "none";
}

// Quiz Q&As
const quizForm = document.querySelector(".quiz");
const submitButton = document.querySelector("#btn-submitquiz");
const correctAnswers = ["90", "right", "one", "12,16,20", "equilateral", "100", "30", "a+b+c", "no", "45"];

submitButton.addEventListener("click", clickButtonHandler);

function clickButtonHandler (){
    const formResults = new FormData(quizForm);
    let score = 0, index = 0;

    for (let value of formResults.values()) {
        console.log(value);
        if (value === correctAnswers[index]) {
            score = score + 1;
            console.log(score);
        }
        index = index + 1;
    }
    showText("The score is " + score);
};