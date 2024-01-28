const userInputField = document.querySelector("#textInput");
const addBtn = document.querySelector("#addBtn");
const heroesDisplay = document.querySelector(".outputList");
let heroes = [];


addBtn.addEventListener("click", (event) => {
    const userHero = userInputField.value;
    heroes.push(userHero);

    if(userHero !== ""){
        userInputField.value = "";
        heroesDisplay.innerHTML = "";

        heroes.forEach(hero => {
            const heroListElement = document.createElement("li");
            heroListElement.innerText = hero;
            heroesDisplay.appendChild(heroListElement);
    });
    
    } else {
        console.log("Error. Blank")
    }


    console.log(heroes);
    event.preventDefault();
});

