import Phaser from "phaser";
import Utils from "./utils";

export default class SettingsScene extends Phaser.Scene {
    constructor() {
        super("settingsMenu");
    }

    create() {
        // Setup menu
        const rectWidth = 375;
        const rectHeight = 250;

        const rectX = this.game.config.width / 2 - rectWidth / 2; // required x coordinate for the rect to be centered
        const rectY = this.game.config.height / 2 - rectHeight / 2; // required y coordinate for the rect to be centered

        Utils.addMenu(this, rectX, rectY, rectWidth, rectHeight);

        // Add back button
        Utils.addButton(this, rectX + 40, rectY + 50, "play", () => {
            this.scene.stop("settingsMenu");
            this.scene.setVisible(true, "pauseMenu");
        })
            .setAngle(180)
            .setScale(0.5, 0.5);

        // Add title
        const [_, titleUnderline] = Utils.addText(
            this,
            this.game.config.width / 2,
            rectY + 50,
            "Settings Menu",
            { font: "32px Arial" },
            true
        );

        // Draw buttons
        this.muteBtn = Utils.addButton(
            this,
            rectX + rectWidth / 2,
            (rectY + rectHeight + titleUnderline.bottom) / 2,
            this.sound.mute ? "muted" : "unmuted",
            () => {
                if (this.sound.mute) {
                    // Currently muted, so unmute
                    this.sound.setMute(false);
                    this.muteBtn.setTexture("unmuted");
                } else {
                    // Currently unmuted, so mute
                    this.sound.setMute(true);
                    this.muteBtn.setTexture("muted");
                }
                this.sound.setMute(!this.sound.mute); // toggle mute status
            }
        );
    }
}
