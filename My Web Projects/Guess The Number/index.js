// Fundamental Code
console.log("JavaScript By 'index.js'");

//Elements of the webpage
const numDisplay = document.getElementById("numDisplay");
const btnUser = document.getElementById("btnUser");
const minInput = document.getElementById("minInput");
const maxInput = document.getElementById("maxInput");
const userInputNum = document.getElementById("userInputNum");
const showRange = document.getElementById("showRange");


//Variables
let gameStart = false;
let min = 0;
let max = 25;
let selfAssumeMin = false;
let selfAssumeMax = false;
let userNum;
let thoughtnum;
let i = 0;
const duration = 20 * 1000, animationEnd = Date.now() + duration;
console.log(`Game Start: ${gameStart}`);


//Starting game 
userInputNum.style.visibility = "hidden";
function gameSet() {
    minInput.style.visibility = "visible";
    maxInput.style.visibility = "visible";
    btnUser.textContent = "Guess";
    userInputNum.style.visibility = "hidden";
}

btnUser.onclick = function () {
    i++
    if (!gameStart) {
        min = Number(minInput.value);
        if (!Boolean(min)) {
            min = 0;
            selfAssumeMin = true;
        }
        else {
            min = Number(min);
        }
        console.log(`minimum value: ${min}`)
        max = Number(maxInput.value);
        if (!Boolean(max)) {
            max = 25;
            selfAssumeMax = true;
        }
        else {
            max = Number(max);
        }
        console.log(`maximum value: ${max}`)

        if (min < max) {
            minInput.style.visibility = "hidden";
            maxInput.style.visibility = "hidden";
            btnUser.textContent = "Guess";
            userInputNum.style.visibility = "visible";
            gameStart = true;
            console.log(`Game Start: ${gameStart}`);
            if (selfAssumeMax || selfAssumeMin) {
                window.alert(`Assuming maximum value: ${max} and minimum value: ${min}`);
            }
        }
        else if (selfAssumeMax || selfAssumeMin) {
            let i = min - max
            max = i + max + 100
            minInput.style.visibility = "hidden";
            maxInput.style.visibility = "hidden";
            btnUser.textContent = "Guess";
            userInputNum.style.visibility = "visible";
            gameStart = true;
            console.log(`Game Start: ${gameStart}`);
            if (selfAssumeMax || selfAssumeMin) {
                window.alert(`Assuming maximum value: ${max} and minimum value: ${min}`);
            }
        }
        else {
            window.alert("RESTART")
        }
        thoughtnum = Number(Math.trunc(Math.random() * (max - min) + min));
        console.log(thoughtnum);
        showRange.textContent = `${min} - ${max}`
        document.title = "Guess The Number";

    }
    else {
        if (i == 2) {
            userNum = userInputNum.value;
            numDisplay.textContent = thoughtnum;
            if (userNum == thoughtnum) {

                numDisplay.style.color = "lightgreen";

                let skew = 1;

                function randomInRange(min, max) {
                    return Math.random() * (max - min) + min;
                }

                (function frame() {
                    const timeLeft = animationEnd - Date.now(),
                        ticks = Math.max(200, 500 * (timeLeft / duration));

                    skew = Math.max(0.8, skew - 0.001);

                    confetti({
                        particleCount: 1,
                        startVelocity: 0,
                        ticks: ticks,
                        origin: {
                            x: Math.random(),
                            // since particles fall down, skew start toward the top
                            y: Math.random() * skew - 0.2,
                        },
                        gravity: randomInRange(0.4, 0.6),
                        scalar: randomInRange(0.4, 1),
                        drift: randomInRange(-0.4, 0.4),
                    });

                    if (timeLeft > 0) {
                        requestAnimationFrame(frame);
                    }
                })();

            }
            else {
                
        btnUser.textContent = "try Again";
                numDisplay.style.color = "red";
                 const defaults = {
                    spread: 360,
                    ticks: 100,
                    gravity: 0,
                    decay: 0.94,
                    startVelocity: 30,
                };



                confetti({
                    ...defaults,
                    particleCount: 20,
                    scalar: 2,
                    shapes: ["emoji"],
                    shapeOptions: {
                        emoji: {
                            value: ["❌"],
                        },
                    },
                });

                setTimeout(shoot, 0);
                setTimeout(shoot, 100);
                setTimeout(shoot, 200);
            }
        }
        btnUser.textContent = "try Again";

        if (i == 3) {

            location.reload();
            i = 0;
        }

    }
}



