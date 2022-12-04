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

// input: sides, Area of a triangle
const sidesOfaTriangle = document.querySelectorAll(".sides");
const btnCalculatetArea = document.querySelector("#btn-calculateArea");

btnCalculatetArea.addEventListener("click", function clickButtonHandler() {
    if (sidesOfaTriangle[0].value && sidesOfaTriangle[1].value && sidesOfaTriangle[2].value) {
        calculateAreaofTriangle(
            Number(sidesOfaTriangle[0].value),
            Number(sidesOfaTriangle[1].value),
            Number(sidesOfaTriangle[2].value));
    } else {
        showText("❗ Please enter all three values.");
        hideHint();
    }
});

function calculateAreaofTriangle(a,b,c){
    var s = (a+b+c)/2;
    var areaSquare = s*(s-a)*(s-b)*(s-c);
    var area = Math.sqrt(areaSquare);
    
    showText("Area of the Triangle: " + area);
    hideHint();
}