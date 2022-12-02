import Phaser from "phaser";

export default class Utils {
    static lastHover = -Infinity;

    static addButton(scene, x, y, btnImg, onClick) {
        const btn = scene.add.image(x, y, btnImg).setOrigin(0.5);
        btn.setInteractive();

        const hoverSound = scene.sound.get("audio_hover") || scene.sound.add("audio_hover");

        btn.on("pointerover", () => {
            const timeNow = new Date();
            if (timeNow - Utils.lastHover < 100) return; // wait at least 0.1sec between hover events

            hoverSound.play();
            Utils.lastHover = timeNow;
        });

        btn.on("pointerup", onClick);
        return btn;
    }

    static addMenu(scene, x, y, width, height) {
        const rect = new Phaser.Geom.Rectangle(x, y, width, height);

        let graphics = scene.add.graphics({ fillStyle: { color: 0x303a5f } });
        graphics.fillRectShape(rect);
        return rect;
    }

    static addText(scene, x, y, text, styles, underline) {
        const textEl = scene.add.text(x, y, text, { color: "#E0E0B8", ...styles }).setOrigin(0.5);
        if (underline === true) {
            // Underline `text` by drawing a line underneath it
            const textUnderline = new Phaser.Geom.Line(
                textEl.x - textEl.width / 2 - 10, // 10 pixels left of the start of the title
                textEl.y + textEl.height / 2,
                textEl.x + textEl.width / 2 + 10, // 10 pixels right of the end of the title
                textEl.y + textEl.height / 2
            );
            let graphics = scene.add.graphics({ lineStyle: { width: 4, color: 0xe0e0b8 } });
            graphics.strokeLineShape(textUnderline);
            return [textEl, textUnderline];
        }
        return textEl;
    }

    static async addScoreboardEntry(data) {
        return await this.sendRequest("http://127.0.0.1:5001/scoreboard", "POST", data);
    }

    static async sendRequest(url, method, data) {
        const fetchOptions = {
            method: method,
            headers: {
                "Content-Type": "application/json",
            },
        };
        if (method !== "GET") fetchOptions.body = JSON.stringify(data);

        try {
            const resp = await fetch(url, fetchOptions);

            const json = await resp.json();
            if (resp.status === 400) {
                console.log(json);
                alert(
                    `A bad request was sent to ${method} ${url}:\n${json
                        .map(errObj => JSON.stringify(errObj)) // conver to string before joining
                        .join("\n")}`
                );
            } else if (resp.status === (method === "POST" ? 201 : 200)) {
                return json;
            } else {
                alert(
                    `Received an unexpected response code from ${method} ${url} (${
                        resp.status
                    }): ${JSON.stringify(json)}`
                );
            }
        } catch (exc) {
            alert(`An unexpected error occured when sending a request to ${method} ${url}: ${exc}`);
        }
    }
}
