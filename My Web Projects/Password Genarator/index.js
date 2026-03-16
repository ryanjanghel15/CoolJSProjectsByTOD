//Elements of WebPage

const displayBox = document.getElementById("displayBox");
const smallCaseCbox = document.getElementById("smallCaseCbox");
const bigCaseCbox = document.getElementById("bigCaseCbox");
const symCbox = document.getElementById("symCbox");
const numCbox = document.getElementById("numCbox");
const userBtn = document.getElementById("userBtn");
const lengthInput = document.getElementById("lengthInput");


//Array of cases

let smallercases = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let biggercases = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numericcases = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let symbolcases = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "=", "{", "}", ":", "\",", "<", ">", "?"]
let toUseCases = [];

//Values to Assume
let password = "";

function genaratePassword() {
    if (lengthInput.value<= 30) {
        toUseCases = [];
        password = "";
        //Create toUseCases
        if (smallCaseCbox.checked) { toUseCases = [...toUseCases, ...smallercases]; }
        if (bigCaseCbox.checked) { toUseCases = [...toUseCases, ...biggercases]; }
        if (numCbox.checked) { toUseCases = [...toUseCases, ...numericcases]; }
        if (symCbox.checked) { toUseCases = [...toUseCases, ...symbolcases]; }
        if (toUseCases.length !== 0) {
            for (let i = 0; i < lengthInput.value; i++) {
                password = String(password) + String(toUseCases[Math.floor(Math.random() * (toUseCases.length - 1))])
                displayBox.textContent = password;
                displayBox.style.textAlign = "center"
            }
        }
        else {
            window.alert("Select at least one kind of cases");
        }
    }
    else{
        window.alert("Password lenght should be less than 30");
    }



}

userBtn.addEventListener("click", genaratePassword)
