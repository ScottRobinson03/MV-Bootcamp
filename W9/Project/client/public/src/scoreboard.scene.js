import Phaser from "phaser";
import Utils from "./utils";

export default class ScoreboardScene extends Phaser.Scene {
    constructor() {
        super("scoreboardMenu");
    }

    create() {
        // Try to extract scoreboard details from deathMenu
        if (this.game.scene.keys.deathMenu.scoreboardList !== undefined) {
            this.scoreboard = this.game.scene.keys.deathMenu.scoreboardList;
        } else {
            Utils.sendRequest("http://127.0.0.1:5001/scoreboard", "GET").then(
                entries => (this.scoreboard = entries)
            );
        }

        if (!this.scoreboard) {
            alert("Failed to fetch scoreboard data");
            this.scene.stop("scoreboardMenu");
        }

        // Create Menu
        const rectWidth = this.game.config.width * 0.75;
        const rectHeight = this.game.config.height * 0.75;

        const rectX = this.game.config.width / 2 - rectWidth / 2; // required x coordinate for the rect to be centered
        const rectY = this.game.config.height / 2 - rectHeight / 2; // required y coordinate for the rect to be centered

        Utils.addMenu(this, rectX, rectY, rectWidth, rectHeight);

        Utils.addButton(this, rectX + 30, rectY + 30, "play", () => {
            this.scene.stop("scoreboardMenu");
            this.scene.setVisible(true, "deathMenu");
        })
            .setAngle(180)
            .setScale(0.5, 0.5);

        const [_, titleUnderline] = Utils.addText(
            this,
            rectX + rectWidth / 2,
            rectY + 30,
            "Scoreboard",
            { font: "32px Arial" },
            true
        );

        let prevBottom = titleUnderline.bottom + 15;
        // Start adding scoreboard data
        const maxPositionLength = (this.scoreboard.length + 1).toString().length;
        const maxScoreLength = this.scoreboard[0].score.toString().length;

        let col = 0;
        for (let i = 0; i < this.scoreboard.length; i++) {
            const entry = this.scoreboard[i];
            const text = Utils.addText(
                this,
                col === 0 ? rectX + rectWidth / 4 + 15 : rectX + rectWidth * 0.75 + 15,
                prevBottom + 15,
                `#${(i + 1).toString().padStart(maxPositionLength, "0")} - ${entry.score
                    .toString()
                    .padStart(maxScoreLength)} ${entry.username}`,
                {
                    align: "left",
                    fixedWidth: rectWidth / 2,
                    font: "18px monospace",
                    wordWrap: {
                        callback: (text, _) => {
                            if (text.length > 20) {
                                return text.substring(0, 16) + "...";
                            }
                            return text;
                        },
                    },
                }
            );
            prevBottom = text.y + text.height;
            if (rectY + rectHeight - prevBottom < 30) {
                // text is close to the bottom rectangle
                if (col === 0) {
                    col = 1;
                    prevBottom = titleUnderline.bottom + 15;
                } else {
                    // Have populated both columns, so break
                    break;
                }
            }
        }
    }
}
