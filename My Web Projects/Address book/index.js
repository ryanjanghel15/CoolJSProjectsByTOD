//Elements of WebPage
const nameIN = document.getElementById("nameIN");
const ageIN = document.getElementById("ageIN");
const dobIN = document.getElementById("dobIN");
const addIN = document.getElementById("addIN");
const conIN = document.getElementById("conIN");
const relIN = document.getElementById("relIN");
const emailIN = document.getElementById("emailIN");
const tagIN = document.getElementById("tagIN");
const tagColorIN = document.getElementById("tagColorIN");
const userBtn = document.getElementById("userBtn");
const contactList = document.getElementById("contactList");
const TagList = document.getElementById("TagList");
const DisplayBox = document.getElementById("DisplayBox");
const exampleModal = document.getElementById("exampleModal");
const modalInstance = bootstrap.Modal.getOrCreateInstance(exampleModal);

//Varables
let newContact;
let contactCount = 0;


TagList.addEventListener("change",(event)=>{
    const cards = document.querySelectorAll(".card");
    cards.forEach((card)=>{
        if(event.target.value == "default"){
            card.style.display = "block";
        }
        else if(event.target.value == card.dataset.tag){
            card.style.display = "block";
        }
        else{
            card.style.display = "none";
        }
    });
});




contactList.addEventListener("change", (event) => {

    const selected = event.target.value;
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {

        if (selected === "all") {
            card.style.display = "block";
        }
        else if (card.dataset.index === selected) {
            card.style.display = "block";
        }
        else {
            card.style.display = "none";
        }

    });

});


function addContact(name, age, dob, add, con, rel, email, tag, tagColor) {
    this.name = name;
    this.age = age;
    this.dob = dob;
    this.add = add;
    this.con = con;
    this.rel = rel;
    this.email = email;
    this.tag = tag;
    this.tagColor = tagColor;
    this.index = null;
}
userBtn.addEventListener("click", () => {
    newContact = new addContact(nameIN.value, ageIN.value, dobIN.value, addIN.value, conIN.value, relIN.value, emailIN.value, tagIN.value, tagColorIN.value);
    newContact.index = contactCount + 1
    contactCount++;
    DisplayBox.innerHTML += `
    <div class="card" data-index="${newContact.index}" data-tag="${newContact.tag}">
            <div class="card-body">
                <h3><span class="badge text-bg-${newContact.tagColor == "blue" ? "primary" :newContact.tagColor == "red" ? "danger" :newContact.tagColor == "yellow" ? "warning" :newContact.tagColor == "black" ? "dark" :"secondary"}">${newContact.tag}</span></h3>
                <div class="row">
                    <div class="col">
                        <h5 class="card-title">${newContact.name}</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">${newContact.rel + " • " + newContact.age}</h6>
                    </div>
                    <div class="col"><p class="card-text">${newContact.add}</p></div>
                    <div class="col"><a href="tel:${newContact.con}" class="card-text">${newContact.con}</a>
                <a target="_blank" href="mailto:${newContact.email}" class="card-link">${newContact.email}</a>
                    </div>
                </div>
            </div>
        </div>`
    contactList.innerHTML += `<option class="contactOptions" value="${newContact.index}">${newContact.name}</option>`
    TagList.innerHTML += `<option class="tagOptions" value="${newContact.tag}">${newContact.tag}</option>`
    modalInstance.hide();
})
