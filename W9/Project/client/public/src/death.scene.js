import Phaser from "phaser";
import Utils from "./utils";

export default class DeathScene extends Phaser.Scene {
    constructor() {
        super("deathMenu");
    }

    extractStatInfo() {
        this.username = this.game.scene.keys.inputMenu.username;

        this.score = this.game.scene.keys.playGame.score;
        this.powerups = this.game.scene.keys.playGame.powerups;

        this.applesCollected = this.game.scene.keys.playGame.applesCollected;

        this.collectedPowerups = this.game.scene.keys.playGame.collectedPowerups;
        this.spawnedPowerups = this.game.scene.keys.playGame.spawnedPowerups;

        this.timeSurvived = this.game.scene.keys.playGame.timeSurvived;
    }

    formatTime(totalSeconds) {
        let [minutes, seconds] = [Math.floor(totalSeconds / 60), totalSeconds % 60];
        let timeString = "";

        if (minutes > 0) {
            timeString += `${minutes} ${minutes === 1 ? "minute" : "minutes"}`;
        }

        if (seconds > 0) {
            timeString += `${timeString === "" ? "" : " and "}${seconds} ${
                seconds === 1 ? "second" : "seconds"
            }`;
        }
        return timeString;
    }

    playSounds() {
        this.deathSound = this.sound.add("audio_death");
        this.deathSound.play();

        this.deathMusic = this.sound.add("audio_death_menu");
        this.deathMusic.play();
    }

    powerupStatsToString() {
        let collectionString = "";

        let totalPowerupsCollected = 0;
        let totalPowerupsSpawned = 0;

        for (let [powerup, timesSpawned] of Object.entries(this.spawnedPowerups)) {
            if (timesSpawned === 0) continue;

            const timesCollected = this.collectedPowerups[powerup];

            totalPowerupsCollected += timesCollected;
            totalPowerupsSpawned += timesSpawned;

            collectionString += `    - ${timesCollected}/${timesSpawned} ${powerup}${
                powerup.endsWith("s") || timesSpawned === 1 ? "" : "s" // whether to pluralise
            }`;

            const percentageCollected = (timesCollected / timesSpawned) * 100;

            collectionString += ` (${
                // `percentageCollected` as integer or to 2dp
                Number.isInteger(percentageCollected)
                    ? percentageCollected
                    : percentageCollected.toFixed(2)
            }%)`;
            collectionString += "\n";
        }

        const totalPercentageCollected = (totalPowerupsCollected / totalPowerupsSpawned) * 100;

        let totalString = `You collected a total of ${this.applesCollected} apple${
            this.applesCollected === 1 ? "" : "s" // whether to pluralise
        } and ${totalPowerupsCollected}/${totalPowerupsSpawned} powerups`;
        if (totalPowerupsSpawned !== 0) {
            totalString += ` (${
                //totalPercentageCollected` as integer or to 2dp
                Number.isInteger(totalPercentageCollected)
                    ? totalPercentageCollected
                    : totalPercentageCollected.toFixed(2)
            }%)`;
        }
        return [totalString + (totalPowerupsSpawned === 0 ? "." : ":"), collectionString];
    }

    create() {
        // Get stat related info from play scene
        this.extractStatInfo();

        // Load & play sounds
        this.playSounds();

        // Setup menu
        const rectWidth = 450;
        const rectHeight = 420;

        const rectX = this.game.config.width / 2 - rectWidth / 2; // required x coordinate for the rect to be centered
        const rectY = this.game.config.height / 2 - rectHeight / 2; // required y coordinate for the rect to be centered

        Utils.addMenu(this, rectX, rectY, rectWidth, rectHeight);

        // Add menu title
        let [_, titleUnderline] = Utils.addText(
            this,
            this.game.config.width / 2,
            rectY + 40,
            "☠️ You died ☠️",
            { font: "32px Arial" },
            true // underline the text
        );

        // Display stats
        const [totalString, collectionString] = this.powerupStatsToString();
        const fontStyle = {
            align: "center",
            font: "18px Arial",
            wordWrap: { width: rectWidth - 10 },
        };

        // Attempt to add scoreboard entry
        Utils.addScoreboardEntry({
            username: this.username || "Anonymous",
            score: this.score,
            collectedApples: this.applesCollected,
            collectedPowerups: this.collectedPowerups,
            secondsSurvived: this.timeSurvived,
            spawnedPowerups: this.spawnedPowerups,
        }).then(entry => {
            if (!entry) return; // failed to insert entry

            Utils.sendRequest("http://127.0.0.1:5001/scoreboard", "GET").then(entries => {
                this.scoreboardList = entries;
                let position;
                for (let i = 0; i < entries.length; i++) {
                    if (entries[i]._id === entry._id) {
                        position = i + 1;
                    }
                }
                const scoreText = Utils.addText(
                    this,
                    rectX + rectWidth / 2,
                    titleUnderline.bottom + 30,
                    `Score: ${this.score
                        .toString()
                        .padStart(3, "0")}\nLeaderboard Position: #${position}`,
                    fontStyle
                );
                const timeString = this.formatTime(this.timeSurvived);
                const timeSurvivedText = Utils.addText(
                    this,
                    rectX + rectWidth / 2,
                    scoreText.y + scoreText.height,
                    `Time Survived: ${timeString}`,
                    fontStyle
                );

                const totalText = Utils.addText(
                    this,
                    rectX + rectWidth / 2,
                    timeSurvivedText.y + timeSurvivedText.height + 15,
                    totalString,
                    fontStyle
                );

                // It's possible that the player died before any powerups spawned,
                // which would mean the `collectionString` is empty so we check against that
                let collectionText;
                if (collectionString !== "") {
                    collectionText = Utils.addText(
                        this,
                        rectX + rectWidth / 2,
                        totalText.y + totalText.height + 50,
                        collectionString,
                        fontStyle
                    );
                }
                const bottomText = collectionText || totalText;

                // Add home button
                Utils.addButton(
                    this,
                    rectX + rectWidth / 4 - 25,
                    (rectY +
                        rectHeight +
                        (bottomText.y + bottomText.height - (collectionText ? 30 : 15))) /
                        2,
                    "home",
                    () => {
                        this.sound.stopAll();
                        this.scene.start("mainMenu");
                        this.scene.stop("deathMenu");
                        this.scene.stop("playGame");
                    }
                );

                // Add redo button
                Utils.addButton(
                    this,

                    rectX + rectWidth / 2,
                    (rectY +
                        rectHeight +
                        (bottomText.y + bottomText.height - (collectionText ? 30 : 15))) /
                        2,
                    "redo",
                    () => {
                        this.sound.stopAll();
                        this.scene.stop("deathMenu");
                        // The player could *theoretically* pause in the same frame as the death,
                        // which would mean the pauseMenu is currently displayed (i.e. we need to close it)
                        this.scene.stop("pauseMenu");
                        this.scene.start("playGame");
                    }
                );

                // Add scoreboard button
                Utils.addButton(
                    this,
                    rectX + rectWidth * 0.75 + 25,
                    (rectY +
                        rectHeight +
                        (bottomText.y + bottomText.height) -
                        (collectionText ? 30 : 15)) /
                        2,
                    "trophy",
                    () => {
                        this.scene.setVisible(false, "deathMenu");
                        this.scene.launch("scoreboardMenu");
                        this.scene.bringToTop("scoreboardMenu");
                    }
                );
            });
        });
    }
}
