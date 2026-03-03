//Elemets of Webpage
const inputBox = document.getElementById('inputBox');
const optionBox = document.getElementById('optionBox');
const userBtn = document.getElementById('userBtn');
const imgDisplay = document.getElementById("imgDisplay");

//Varables
let done = false;
let o;
let dicerolls = [];
let displayIndex = [];

function rollDice() {
    if (!done) {
        o = Number(optionBox.value);
        if (!isNaN(o)) {
            for (let i = 1; i <= o; i++) {
                dicerolls.push(Math.ceil(Math.random() * 6))
                displayIndex = [...dicerolls];
                console.log(displayIndex);
                imgDisplay.innerHTML = imgDisplay.innerHTML + `<img width="50" src="/DiceFaces/${dicerolls[i - 1]}.png">`;
            }
            dicerolls = [];
            done = true;
            userBtn.textContent="Re Roll"
        }
        else if(isNaN(o)){
            o = window.prompt("Type the Number Of dices:")
            for (let i = 1; i <= o; i++) {
                dicerolls.push(Math.ceil(Math.random() * 6))
                displayIndex = [...dicerolls];
                console.log(displayIndex);
                imgDisplay.innerHTML = imgDisplay.innerHTML + `<img width="50" src="/DiceFaces/${dicerolls[i - 1]}.png">`;
            }
            dicerolls = [];
            done = true;
            userBtn.textContent="Re Roll"
        }
    }
    else{
        location.reload();
    }




}

userBtn.addEventListener("click", rollDice)



