const btns = document.getElementsByClassName("drum");
const drumImg = document.getElementById("drumKit");

const sounds = {}

// add sounds to buttons
for (let i=0; i < btns.length; i++) {
    const btn = btns[i];
    
    const audio = new Audio();
    audio.src = `assets/${btn.id}.wav`;
    sounds[btn.id] = audio;

    btn.addEventListener("click", () => {
        sounds[btn.id].play();
    })
}

// allow playing sounds via keys 1-8
document.addEventListener("keydown", (event) => {
    const soundValues = Object.values(sounds);
    for (let i=1; i <= soundValues.length; i++) {
        if (event.key == i.toString()) {
            soundValues[i-1].play();
        }
    }
})