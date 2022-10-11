let hasChangedSkillLvl = false;

function addEventListeners() {
    const createCardBtn = document.getElementById("btn-create-card");
    const title = document.getElementById("title");

    const checkCardComplete = () => {
        return title.value != "" && hasChangedSkillLvl;
    }

    title.addEventListener("input", () => {
        createCardBtn.disabled = !checkCardComplete();
    })

    const skillLevelLbl = document.getElementById("slider-label");
    const skillLevelSlider = document.getElementById("slider");
    
    skillLevelSlider.addEventListener("input", () => {
        skillLevelLbl.textContent = `Skill Level: (${skillLevelSlider.value})`

        hasChangedSkillLvl = true;
        createCardBtn.disabled = !checkCardComplete();
    })   
}

const btn = document.getElementById("btn-create-card");
btn.addEventListener("click", () => {
    if (btn.textContent == "Create Card") {
        createCard();
        btn.textContent = "Reset?";
    } else {
        location.reload();
    }
})

function createCard() {
    const title = document.getElementById("title");
    const checkBox = document.getElementById("show-skill");
    const skillLevelLbl = document.getElementById("slider-label");
    const skillLevelSlider = document.getElementById("slider");

    document.querySelector("label[for='title']").textContent = title.value;
    title.remove();

    let skillLevel;
    if (checkBox.checked) {
        skillLevel = skillLevelSlider.value;
    } else {
        if (skillLevelSlider.value < 33) {
            skillLevel = "Low"
        } else if (skillLevelSlider.value < 66) {
            skillLevel = "Medium"
        } else {
            skillLevel = "High";
        }
    }
    skillLevelLbl.textContent = `Skill Level: ${skillLevel}`;
    document.querySelector(".show-skill-container").remove(); // remove checkbox & label
    skillLevelSlider.remove();
    // document.querySelector(".container").style.padding = "5% 10%";
}

addEventListeners();