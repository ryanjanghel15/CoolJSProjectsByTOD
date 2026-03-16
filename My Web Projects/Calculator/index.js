//Elements of WebPage
const equationDisplay = document.getElementById("equationDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const btnNum = document.querySelectorAll(".btnNum");
const btnOpt = document.querySelectorAll(".btnOpt");
const btnEqu = document.getElementById("btnequ");
const btnReset = document.getElementById("btnRefresh");
const btnSpec = document.getElementById("btnSpec");

//varable
let optInAvalible = false;
let i = 0;
let equation;
let countForSpec = false;
let Count = 0;

//Directors
btnNum.forEach(numIn);
btnOpt.forEach(optIn);
btnEqu.addEventListener("click", calculate);
btnReset.addEventListener("click", Reset);
btnSpec.addEventListener("click", specIn);


//functions
function calculate() {
    if (optInAvalible) {
        try {
            equation = equationDisplay.textContent;
            equation = equation.replaceAll("x", "*");
            equation = equation.replaceAll("^", "**");
            for (let i = 0; i < equation.length; i++) {
                if (equation[i] == "√") {
                    equation = equation.replaceAll("√", `${Math.sqrt(equation.slice(i + 1, i + 1 + Count))}`);
                    Count = 0;
countForSpec = false;
                }
            }
            equation = eval(equation);
            resultDisplay.textContent = equation;
        }
        catch {
            resultDisplay.textContent = "Error";
        }
    }

}

function optIn(button) {
    button.addEventListener("click", () => {
        if (optInAvalible) {
            equationDisplay.textContent += button.textContent;
            optInAvalible = false;
            countForSpec = false;
        }
    });

}
function numIn(button) {
    button.addEventListener("click", () => {
        equationDisplay.textContent += button.textContent;
        optInAvalible = true;
        if (countForSpec) {
            Count++
        }
    });


}
function Reset() {
    equationDisplay.textContent = ""
}


function specIn() {
    equationDisplay.textContent += '√';
    optInAvalible = false;
    countForSpec = true;
}