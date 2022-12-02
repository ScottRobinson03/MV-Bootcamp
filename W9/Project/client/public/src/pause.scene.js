import Phaser from "phaser";
import Utils from "./utils";

export default class PauseScene extends Phaser.Scene {
    constructor() {
        super("pauseMenu");
    }

    create() {
        // Setup menu
        const rectWidth = 375;
        const rectHeight = 250;

        const rectX = this.game.config.width / 2 - rectWidth / 2; // required x coordinate for the rect to be centered
        const rectY = this.game.config.height / 2 - rectHeight / 2; // required y coordinate for the rect to be centered

        Utils.addMenu(this, rectX, rectY, rectWidth, rectHeight);

        // Add menu title
        const [_, titleUnderline] = Utils.addText(
            this,
            this.game.config.width / 2,
            rectY + 50,
            "Pause Menu",
            { font: "32px Arial" },
            true // underline the text
        );

        // Add home button
        Utils.addButton(
            this,
            rectX + rectWidth / 4,
            (rectY + rectHeight + titleUnderline.bottom) / 2,
            "home",
            () => {
                this.sound.stopAll();
                this.scene.stop("pauseMenu");
                this.scene.stop("playGame");
                this.scene.start("mainMenu");
                this.scene.bringToTop("mainMenu");
            }
        );

        // Add settings button
        Utils.addButton(
            this,
            rectX + rectWidth * 0.75,
            (rectY + rectHeight + titleUnderline.bottom) / 2,
            "settings",
            () => {
                this.scene.setVisible(false, "pauseMenu");
                this.scene.bringToTop("settingsMenu");
                this.scene.launch("settingsMenu");
            }
        );
    }
}
