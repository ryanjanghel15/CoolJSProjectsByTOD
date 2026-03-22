//Elements of the Doc
const cardwapper = document.querySelector(".cardwapper");
const settingBtn = document.getElementById("settingBtn");
const moreSetpanel = document.getElementById("moreSetpanel");
const noOfPairCardsIn = document.getElementById('noOfCardsIn');
const userStartBtn = document.getElementById("userStartBtn");
const warningDisplay = document.getElementById('warningDisplay');
const forntScreenDisplay = document.getElementById("forntScreenDisplay");
const controlpanel = document.querySelector(".controlpanel");
const restartBtn = document.getElementById("restartBtn");
const cardSymbolSelector = document.querySelectorAll(".cardSymbolSelector");


//Logic Varables
let isSettingsOpen = false;
let noOfPairCards;
let CardType;
let selectedValue;
let allCombinations = ["1", "2", "3", "4", "5"];
let selectedCombinations = [];
let Order = [];
let randomOrder = [];

//Besic Start Setup 
moreSetpanel.style.display = "none";
warningDisplay.style.display = "none";
restartBtn.style.display = "none";


//More Settings panel Toggle
settingBtn.addEventListener("click", SettingToggle);

function SettingToggle() {
    if (!isSettingsOpen) {
        moreSetpanel.style.display = "block";
        isSettingsOpen = true;
    }
    else {
        moreSetpanel.style.display = "none";
        isSettingsOpen = false;
    }
}

//Game Starting Functions
userStartBtn.addEventListener('click', StartGame);

function StartGame() {
    cardwapper.innerHTML = '';
    allCombinations = [];
    selectedCombinations = [];
    Order = [];
    randomOrder = [];
    noOfPairCards = Number(noOfPairCardsIn.value);
    console.log(noOfPairCards);
    cardSymbolSelector.forEach((Selector) => {
        if (Selector.checked) {
            allCombinations.push(Selector.value)
        }
    })
    if (noOfPairCards <= allCombinations.length && noOfPairCards > 0) {
        selectedValue = document.querySelector('input[name="radioBtnGrp1"]:checked')?.value;
        warningDisplay.textContent = ""
        controlpanel.style.display = "none";
        warningDisplay.style.display = "none";
        for (let i = noOfPairCards; i !== 0; i--) {
            console.log(`-------Round:${i}-------`)
            let indexOfNum = Math.ceil(Math.random() * (allCombinations.length - 1))
            console.log(`indexOfNumPushed:${indexOfNum}`)
            let pushNum = allCombinations[indexOfNum]
            allCombinations.splice(indexOfNum, 1);
            console.log(`pushed Num:${pushNum}`);
            console.log(`remaining:${allCombinations}`)
            selectedCombinations.push(pushNum);
        }
        console.log(`Final Result:${selectedCombinations}`)
        Order.push(...selectedCombinations);
        Order.push(...selectedCombinations);
        console.log(...Order);
        console.log(`_________________________________________`);
        for (let i = Order.length; i !== 0; i--) {
            let indexOfNum = Math.ceil(Math.random() * (Order.length - 1))
            console.log(`indexOfNumPushed:${indexOfNum}`)
            let pushNum = Order[indexOfNum]
            Order.splice(indexOfNum, 1);
            randomOrder.push(pushNum);
            console.log(`pushed Num:${pushNum}`);
            console.log(`remaining:${Order}`)
        }
        console.log(`Ramdom Order: ${randomOrder}`);

        index = 0;
        randomOrder.forEach((num) => {
            index++;
            cardwapper.innerHTML += `
            <div data-index="${index}" data-answer="${num}" data-cardStyleId="${selectedValue}" class="card">
                <div data-answer="${num}" class="card-body">
                    <img data-answer="${num}" src="/Media/Q-removebg-preview.png">
                </div>
            </div>`
        });

        let card = cardwapper.querySelectorAll(".card");
        let ansI;
        let ansII;
        let cardIndex1;
        let cardIndex2;
        let finishIndex = 0;
        index = 0;
        let lockBoard = false; // Flag to prevent clicking while waiting for timeout

        card.forEach((CARD) => {
            CARD.addEventListener('click', function (event) {
                if (lockBoard) return;

                const currentCard = event.currentTarget;

                // --- NEW: Prevent clicking if card is already matched ---
                if (currentCard.classList.contains('is-matched')) return;

                const currentAnswer = currentCard.getAttribute('data-answer');
                const currentIndex = currentCard.getAttribute('data-index');

                if (index === 1 && currentIndex === cardIndex1) return;

                if (index === 0) {
                    currentCard.querySelector('img').src = `/Media/${currentAnswer}.png`;
                    ansI = currentAnswer;
                    cardIndex1 = currentIndex;
                    index = 1;
                }
                else if (index === 1) {
                    currentCard.querySelector('img').src = `/Media/${currentAnswer}.png`;
                    ansII = currentAnswer;
                    cardIndex2 = currentIndex;

                    if (ansI === ansII) {
                        console.log("Pass.");
                        forntScreenDisplay.style.display="block";
                        // --- NEW: Mark both cards as matched ---
                        const firstCard = cardwapper.querySelector(`[data-index="${cardIndex1}"]`);
                        firstCard.classList.add('is-matched');
                        currentCard.classList.add('is-matched');
                        index = 0;
                        forntScreenDisplay.src = "/Media/c.png";
                        setTimeout(() => {
                            forntScreenDisplay.src = "";
                        forntScreenDisplay.style.display="none";
                        }, 1000);
                        finishIndex++;
                    } else {
                        console.log("Fail");
                        forntScreenDisplay.style.display="block";
                        lockBoard = true;
                        forntScreenDisplay.src = "/Media/w.png";

                        setTimeout(() => {
                            card.forEach((CARD) => {
                                const idx = CARD.getAttribute('data-index');
                                if (idx === cardIndex1 || idx === cardIndex2) {
                                    CARD.querySelector("img").src = "/Media/Q-removebg-preview.png";
                                    forntScreenDisplay.src = "";
                        forntScreenDisplay.style.display="none";

                                }
                            });

                            index = 0;
                            lockBoard = false;
                        }, 1000);
                    }

                    if (finishIndex == noOfPairCards) {
                        restartBtn.style.display = "block";
                    }
                }
            });
        });


    }
    else {
        warningDisplay.textContent = `Please enter a number between 1 and ${allCombinations.length}.`;
        warningDisplay.style.display = "block";
        isSettingsOpen = false;
        moreSetpanel.style.display = "none";
        noOfPairCardsIn.style.backgroundColor = "red";
    }
}
restartBtn.addEventListener("click", () => {
    window.location.reload();
})



//Besic End Setup
const scriptSrc = document.currentScript.src;
const Jsfilename = scriptSrc.substring(scriptSrc.lastIndexOf('/') + 1);
const path = window.location.pathname;
const Htmlfilename = path.substring(path.lastIndexOf('/') + 1);
console.log(`"${Jsfilename}" is linked to "${Htmlfilename}"`);
