let randomInfo = [
    "Dominion, by Tom Holland",
    "Silence, by Shusako Endo",
    "The Limits of Critique, by Rita Felski",
    "A Tale of Two Cities, by Charles Darwin",
    "The Tacit Dimension, by Michael Polanyi",
    "Truth and Method, by Hans-Georg Gadamer",
    "Aspects of Truth, by Catherine Pickstock",
    "Saving the Appearances, by Owen Barfield",
    "Philosopher of the Heart, by Clare Carlisle",
    "The Master and His Emissary, by Iain McGilchrist",
    "The Lion, the Witch and the Wardrobe, by C. S. Lewis",
    "The Territories of Science and Religion, by Peter Harrison",
]
const originalRandomInfo = randomInfo.slice();

const cardToInfoMapping = {}

const cardSection = document.querySelector(".cards");
const numCards = document.getElementById("card-number");

numCards.addEventListener("input", () => {
    createCards(numCards);
})

function createCards(numCards) {
    cardSection.replaceChildren();
    // Reset randomInfo so that there's no missing data
    randomInfo = originalRandomInfo.slice();

    // Ensure the cards after `numCards.value` don't have a random info assigned to them
    for (let i = +numCards.value+1; i <= +numCards.max; i++) {
        delete cardToInfoMapping[i];
    }

    // Create the cards
    for (let i = +numCards.min ; i <= +numCards.value; i++) {
        createCard(i);
    }
}

function createCard(cardNumber) {
    const card = document.createElement("div");
    card.classList.add("card");

    const cardText = document.createElement("p");
    if (!cardToInfoMapping[cardNumber]) {
        cardText.append(cardNumber.toString());
    } else {
        cardText.append(cardToInfoMapping[cardNumber]);
        randomInfo.splice(randomInfo.indexOf(cardToInfoMapping[cardNumber]), 1); // remove from randomInfo
    }

    card.append(cardText);
    cardSection.append(card);

    card.addEventListener("click", () => {
        let text;
        if (card.firstChild.innerText === cardNumber.toString()) {
            const index = Math.floor(Math.random() * (randomInfo.length - 1)); // get random index
            text = randomInfo[index]; // get item at index
            cardToInfoMapping[cardNumber] = text; // add to the mapping
            randomInfo.splice(index, 1); // remove item at index
        } else {
            randomInfo.push(card.firstChild.innerText); // re-add the text to randomInfo
            delete cardToInfoMapping[cardNumber] // remove from the mapping
            text = cardNumber.toString();
        }

        cardText.replaceChildren(text);
        card.replaceChildren(cardText);
    })
}