const anglesOfaTriangle = document.querySelectorAll(".angles");
const btnIsitaTriangle = document.querySelector("#btn-isitatriangle");
const outputText = document.querySelector("#outputText");
const outputHint = document.querySelector("#outputHint");

btnIsitaTriangle.addEventListener("click", function clickButtonHandler(){
    if(anglesOfaTriangle[0].value && anglesOfaTriangle[1].value && anglesOfaTriangle[2].value){
            checkIfTriangle(anglesOfaTriangle[0].value,anglesOfaTriangle[1].value,anglesOfaTriangle[2].value);
    }else{
        showText("❗ Please enter all three values.");
    }
});

function showText(text){
    outputText.innerText =  text;
}

function showHint(text){
    outputHint.innerText = text;
}

function checkIfTriangle(one,two,three){
    const sum = Number(one)+Number(two)+Number(three);
if(sum === 180){
    showText("👏🏻 It's a triangle!");
}else{
    showText("👎🏻 It's not a triangle!");
    showHint("Hint: Sum of angles of a triangle equals 180°.");
}   
}