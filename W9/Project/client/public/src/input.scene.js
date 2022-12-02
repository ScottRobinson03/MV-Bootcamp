import Phaser from "phaser";
import Utils from "./utils";

export default class InputScene extends Phaser.Scene {
    constructor() {
        super("inputMenu");
    }

    startGame() {
        this.username = this.nameInput.getChildByName("name").value;
        this.scene.stop("inputMenu");
        this.scene.start("playGame");
    }

    create() {
        // Add menu rect
        const menu = Utils.addMenu(
            this,
            50,
            50,
            this.game.config.width - 100,
            this.game.config.height - 100
        );

        // Add title
        Utils.addText(
            this,
            this.game.config.width / 2,
            this.game.config.height / 3,
            "Enter your name to appear on the scoreboard:",
            {
                align: "center",
                fontSize: 32,
                fontStyle: "bold",
                wordWrap: { width: this.game.config.width * 0.8 },
            }
        );

        // Load in input html file
        this.nameInput = this.add
            .dom(this.game.config.width / 2, this.game.config.height / 2)
            .createFromCache("form")
            .setOrigin(0.5);

        // Add event listener so that when user presses "ENTER" key, the game starts
        this.returnKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
        this.returnKey.on("down", () => this.startGame()); // can't pass `this.startGame` directly since value of `this` inside the func will be wrong

        // Add play button
        Utils.addButton(
            this,
            this.game.config.width / 2,
            (menu.y + menu.height + this.nameInput.y + this.nameInput.height - 15) / 2,
            "play",
            () => this.startGame() // can't pass `this.startGame` directly since value of `this` inside the function will be wrong
        );
    }
}
