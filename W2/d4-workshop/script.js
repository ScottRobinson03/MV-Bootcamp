const characters = [
    {
        "name": "Harry Potter",
        "image": "https://upload.wikimedia.org/wikipedia/en/d/d7/Harry_Potter_character_poster.jpg"
    },
    {
        "name": "Ginny Weasley",
        "image": "https://upload.wikimedia.org/wikipedia/en/e/e7/Ginny_Weasley_poster.jpg"
    },
    {
        "name": "Hermione Granger",
        "image": "https://upload.wikimedia.org/wikipedia/en/d/d3/Hermione_Granger_poster.jpg"
    },
    {
        "name": "Tom Riddle",
        "image": "https://i.pinimg.com/originals/d5/dc/a4/d5dca4ac9a1ff6704aa8977689a4bc8a.jpg"
    },
    {
        "name": "Severus Snape",
        "image": "https://upload.wikimedia.org/wikipedia/en/b/b9/Ootp076.jpg"
    },
    {
        "name": "Draco Malfoy",
        "image": "https://upload.wikimedia.org/wikipedia/en/1/16/Draco_Mal.JPG"
    },
    {
        "name": "Hagrid",
        "image": "https://upload.wikimedia.org/wikipedia/en/1/10/RubeusHagrid.jpg"
    },
    {
        "name": "Luna Lovegood",
        "image": "https://images.ctfassets.net/usf1vwtuqyxm/t6GVMDanqSKGOKaCWi8oi/74b6816d9f913623419b98048ec87d25/LunaLovegood_WB_F5_LunaLovegoodPromoCloseUp_Promo_080615_Port.jpg?fm=jpg"
    },
    {
        "name": "Ron Weasley",
        "image": "https://upload.wikimedia.org/wikipedia/en/5/5e/Ron_Weasley_poster.jpg"
    },
    {
        "name": "Sirius Black",
        "image": "https://upload.wikimedia.org/wikipedia/en/6/6b/Sirius_Black.jpeg"
    },
    {
        "name": "Neville Longbottom",
        "image": "https://media.harrypotterfanzone.com/neville-longbottom-toad-prisoner-of-azkaban-portrait-770x0-c-default.jpg"
    }
];
const elements = ["Fire", "Water", "Earth", "Wind"];
const houses = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];
const mainColours = ["red", "silver", "yellow", "blue"];
const secondaryColours = ["gold", "green", "black", "bronze"];

const intro = document.querySelector(".intro");
const main = document.querySelector(".main");

function createTable() {
    const table = document.createElement("table");
    for (let i = 0; i < 3; i++) {
        const tr = document.createElement("tr");
        
        for (let j = 0; j < 4; j++) {
            const td = document.createElement("td");
            if (i != 2) td.setAttribute("colspan", "2");
            
            if (i == 0) td.innerText = houses[j];
            else td.classList.add(mainColours[j]);

            if (i == 1) {
                td.innerText = elements[j];
            }
    
            tr.append(td);

            if (i == 2) {
                const td2 = document.createElement("td");
                td2.classList.add(secondaryColours[j]);
                tr.append(td2);
            }
        }
        table.append(tr);
    }
    intro.append(table);
}

function createCharacter({name, image}) {
    const card = document.createElement("div");
    card.classList.add("card");

    const characterName = document.createElement("h2");
    characterName.classList.add("card-title");
    characterName.append(name);

    const characterImage = document.createElement("img");
    characterImage.src = image;

    const sliderContainer = document.createElement("div");
    sliderContainer.classList.add("sliders");

    function createSlider(slider) {
        return `
            <div class="single-slider">
                <input type="range" min="1" max="100" value="50" class="${slider.toLowerCase()}">
                <label>${slider}</label>
            </div>
        `
    }

    elements.forEach(element => sliderContainer.innerHTML += createSlider(element));

    const sortingButton = document.createElement("button");
    sortingButton.append("Calculate House");
    sliderContainer.append(sortingButton);

    card.append(characterName, characterImage, sliderContainer);
    main.append(card);
}

document.addEventListener("click", (e) => {
    if (e.target.matches("button")) {
        const card = e.target.closest(".card");

        card.scrollIntoView();
        
        const inputs = Array.from(card.querySelectorAll("input"));
        const inputValues = [... inputs.map(input => +input.value)];

        let chosenIndex;
        const highest = Math.max(...inputValues);
        const duplicates = inputs.filter(inp => inp.value == highest);

        if (duplicates.length == 1) {
            chosenIndex = inputValues.indexOf(highest);
        } else {
            chosenIndex = Math.round(Math.random() * (duplicates.length -1));
        }

        const finalElement = inputs[chosenIndex].classList[0];
        if (card.classList.length > 1) {
            card.classList.replace(card.classList[1], finalElement);
        } else {
            card.classList.toggle(finalElement);
        }
    }
})

createTable();
characters.forEach(character => createCharacter(character));
