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

// input: angles, Is it a triangle? 
const anglesOfaTriangle = document.querySelectorAll(".angles");
const btnIsitaTriangle = document.querySelector("#btn-isitatriangle");

btnIsitaTriangle.addEventListener("click", function clickButtonHandler() {
    if (anglesOfaTriangle[0].value && anglesOfaTriangle[1].value && anglesOfaTriangle[2].value) {
        checkIfTriangle(anglesOfaTriangle[0].value, anglesOfaTriangle[1].value, anglesOfaTriangle[2].value);
    } else {
        showText("❗ Please enter all three values.");
        hideHint();
    }
});

function checkIfTriangle(one, two, three) {
    const sum = Number(one) + Number(two) + Number(three);
    if (sum === 180) {
        showText("👏🏻 It's a triangle!");
        hideHint();
    } else {
        showText("👎🏻 It's not a triangle!");
        showHint("Hint: Sum of angles of a triangle equals 180°.");
    }
}