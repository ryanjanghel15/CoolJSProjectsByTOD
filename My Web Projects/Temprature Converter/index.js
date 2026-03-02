//Elements of the Doc

const userIN = document.getElementById("userIN");
const fromValue = document.getElementById("fromValue");
const toValue = document.getElementById("toValue");
const userBtn = document.getElementById("userBtn");
const displayFont = document.getElementById("displayFont");
const errorimg = document.getElementById("error");

//Varabales
let temp;

userBtn.addEventListener("click", compute);

function compute() {
    switch (fromValue.value) {
        case "fromC":
            if (toValue.value === "toF") {
                temp = (Number(userIN.value) * 9 / 5) + 32;
                displayFont.textContent = `${temp.toFixed(1)}°F`;
            }
            else if (toValue.value === "toK") {
                temp = Number(userIN.value) + 27;
                displayFont.textContent = `${temp.toFixed(1)}°K`;
            }
            else{
                errorimg.style.opacity = 1;
                errorimg.title="Can't Convert the same unit."
                displayFont.textContent = "Error"
            }
            break;
        case "fromF":
            if (toValue.value === "toC") {
                temp = 5 / 9 * (Number(userIN.value) - 32);
                displayFont.textContent = `${temp.toFixed(1)}°C`;
            }
            else if (toValue.value === "toK") {
                temp = 5 / 9 * (Number(userIN.value) - 32) + 273;
                displayFont.textContent = `${temp.toFixed(1)}°K`;
            }
            else{
                errorimg.style.opacity = 1;
                errorimg.title="Can't Convert the same unit."
                displayFont.textContent = "Error"
            }
            break;
        case "fromK":
            if (toValue.value === "toC") {
                temp = Number(userIN.value) - 273;
                displayFont.textContent = `${temp.toFixed(1)}°C`;
            }
            else if (toValue.value === "toF") {
                temp = (Number(userIN.value) - 273) * 9 / 5 + 32;
                displayFont.textContent = `${temp.toFixed(1)}°F`;
            }
            else{
                errorimg.style.opacity = 1;
                errorimg.title="Can't Convert the same unit."
                displayFont.textContent = "Error"
            }
            break;
        default:
            errorimg.style.opacity = 1;
                displayFont.textContent = "Error"
            break;

    }

}

