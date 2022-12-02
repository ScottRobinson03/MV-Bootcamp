import Phaser from "phaser";

export default class MenuScene extends Phaser.Scene {
    constructor() {
        super("mainMenu");
    }

    create() {
        this.music = this.sound.add("audio_music");

        this.sound.pauseOnBlur = false;
        this.music.play({ loop: true, volume: 0.4 });

        this.scene.bringToTop("inputMenu");
        this.scene.start("inputMenu");
    }
}
