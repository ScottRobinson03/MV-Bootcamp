const cardInfo = {
    name: "Rocky",
    skillLevel: 24,
    displaySkillLevel: true,
    cardImage: "",

    getSkillMessage() {
        let msg = "Skill Level: ";
        if (this.displaySkillLevel) {
            return msg + this.skillLevel;
        }
        
        if (skillLevel < 33) {
            return msg + "Low";
        } else if (skillLevel < 67) {
            return msg + "Medium";
        } else {
            return msg + "High";
        }
    },

    styleCard(main, article, cardSection, nameSubSection, skillLevelSubSection, button) {
        main.classList.toggle("main");
        article.classList.toggle("card");
        cardSection.classList.toggle("card-info");
        nameSubSection.classList.toggle("name");
        skillLevelSubSection.classList.toggle("skill");
        button.classList.toggle("button");
    },
}

function createHTML() {
    const main = document.querySelector("main");
    const article = document.createElement("article");
    const cardSection = document.createElement("section");
    const nameSubSection = document.createElement("section");
    const name = document.createElement("h2");
    const skillLevelSubSection = document.createElement("section");
    const skill = document.createElement("h3");
    const button = document.createElement("button");

    name.append(cardInfo.name.toUpperCase());
    nameSubSection.append(name);

    skill.append(cardInfo.getSkillMessage());
    skillLevelSubSection.append(skill);

    cardSection.append(nameSubSection, skillLevelSubSection);

    button.textContent = "Style Card";
    article.append(cardSection, button);

    main.append(article);

    button.addEventListener("click", () => {
        cardInfo.styleCard(main, article, cardSection, nameSubSection, skillLevelSubSection, button);
        button.textContent = (button.textContent == "Style Card" ? "Uglify Card" : "Style Card");
    })
}


createHTML();