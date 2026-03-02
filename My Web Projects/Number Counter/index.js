//Elements Of Webpage
const runBtn = document.getElementById("runBtn");
const startNum = document.getElementById("startNum");
const endNum = document.getElementById("endNum");
const writngBox = document.getElementById("writngBox");
const space = document.getElementById("space");
const numBox = document.getElementById("numBox");
const errorImg = document.getElementById("errorImg");

let p = '';

runBtn.addEventListener("click", startCount);

function startCount() {
    if(startNum.value !== "" && endNum.value !== "" ){
    for (let i = Number(startNum.value); i <= Number(endNum.value); i++) {
        p = String(p) + " " + String(i);
    }
    space.remove();
    runBtn.remove();
    startNum.remove();
    endNum.remove();
    writngBox.textContent = p
    writngBox.style.fontSize = "1em";
    errorImg.style.display = "none";
    errorImg.title='';
    numBox.animate([
        { transform: 'translateY(50px)', opacity: 0 },
        { transform: 'translateY(0px)', opacity: 1 }
    ],{
        duration: 1000,
        fill: 'forwards'
    })
    }
    else{
        errorImg.style.display = "block";
        errorImg.title="Enter The Arguments"
        errorImg.animate([
        { transform: 'translateY(50px)', opacity: 0 },
        { transform: 'translateY(0px)', opacity: 1 }
    ],{
        duration: 500,
        fill: 'forwards'
    })
    }
}