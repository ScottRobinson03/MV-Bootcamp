import Phaser from "phaser";
import BootScene from "./public/src/boot.scene";
import MenuScene from "./public/src/menu.scene";
import InputScene from "./public/src/input.scene";
import SettingsScene from "./public/src/settings.scene";
import PlayScene from "./public/src/play.scene";
import PauseScene from "./public/src/pause.scene";
import DeathScene from "./public/src/death.scene";
import ScoreboardScene from "./public/src/scoreboard.scene";

const WIDTH = 21;
const HEIGHT = 21;

export default new Phaser.Game({
    parent: "phaser-root",
    dom: {
        createContainer: true,
    },
    type: Phaser.AUTO,
    width: WIDTH * 32,
    height: HEIGHT * 32,
    render: {
        pixelArt: true,
    },
    scene: [
        BootScene,
        MenuScene,
        InputScene,
        SettingsScene,
        PlayScene,
        PauseScene,
        DeathScene,
        ScoreboardScene,
    ],
});
