import Phaser from "phaser";

export default class BootScene extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }

    preload() {
        this.load.html("form", "../assets/form.html");

        this.load.image("apple", "../assets/images/apple.png");
        this.load.image("fast", "../assets/images/fast.png");
        this.load.image("golden_apple", "../assets/images/golden_apple.png");
        this.load.image("home", "../assets/images/home.png");
        this.load.image("muted", "../assets/images/muted.png");
        this.load.image("play", "../assets/images/play.png");
        this.load.image("redo", "../assets/images/redo.png");
        this.load.image("settings", "../assets/images/settings.png");
        this.load.image("slow", "../assets/images/slow.png");
        this.load.image("snakebody", "../assets/images/snakebody.png");
        this.load.image("snakehead", "../assets/images/snakehead.png");
        this.load.image("star", "../assets/images/star.png");
        this.load.image("trophy", "../assets/images/trophy.png");
        this.load.image("unmuted", "../assets/images/unmuted.png");

        this.load.audio("audio_death", ["../assets/audio/death.mp3"]);
        this.load.audio("audio_death_menu", ["../assets/audio/death_menu.mp3"]);
        this.load.audio("audio_golden_apple", ["../assets/audio/golden_apple.wav"]);
        this.load.audio("audio_hover", ["../assets/audio/hover.wav"]);
        this.load.audio("audio_music", ["../assets/audio/music.mp3"]);
        this.load.audio("audio_pickup", ["../assets/audio/pickup.mp3"]);
        this.load.audio("audio_star", ["../assets/audio/star.mp3"]);
    }

    create() {
        this.scene.start("mainMenu");
    }
}
