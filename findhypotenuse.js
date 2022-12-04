//common text fields
const outputText = document.querySelector("#outputText");
const outputHint = document.querySelector("#outputHint");

//common functions 
function showText(text) {
    outputText.innerText = text;
}

function showHint(text) {
    outputHint.style.display = "block";
    outputHint.innerText = text;
}

function hideHint() {
    outputHint.style.display = "none";
}

// input: lengths, Calculate the hypotenuse length..
const length = document.querySelectorAll(".length");
const calcHypoBtn = document.querySelector("#btn-calculateHypote");

calcHypoBtn.addEventListener("click", clickEventHandler);

function clickEventHandler(){
    const a = Number(length[0].value);
    const b = Number(length[1].value);
    const hypoSquare = ((a*a)+(b*b));
    const hypo = Math.sqrt(hypoSquare);
    showText("The length of Hypotenuse is: " + hypo);
};

