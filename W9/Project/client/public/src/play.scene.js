import Phaser from "phaser";

class SnakeBody {
    constructor(parent, img) {
        this.parent = parent;
        this.img = img;
        this.prevSpot = { x: img.x, y: img.y };
    }

    get x() {
        return this.img.x;
    }

    get transformedX() {
        return this.img.x / 32;
    }

    set transformedX(newTransformedX) {
        this.img.x = newTransformedX * 32;
    }

    get y() {
        return this.img.y;
    }

    get transformedY() {
        return this.img.y / 32;
    }

    set transformedY(newTransformedY) {
        this.img.y = newTransformedY * 32;
    }
}

export default class PlayScene extends Phaser.Scene {
    constructor() {
        super("playGame");
    }

    generateSpawnLocation(attempted) {
        this.paused = true;
        let randTransformedX = Math.max(
            1,
            Math.floor((Math.random() * this.game.config.width) / 32)
        );
        let randTransformedY = Math.max(
            2,
            Math.floor(Math.random() * (this.game.config.height / 32 - 1))
        );

        if (attempted !== undefined && attempted.has([randTransformedX, randTransformedY])) {
            // We've already tried this position, and know it's not valid
            return this.generateSpawnLocation(attempted);
        }

        attempted = attempted || new Set();

        const x = randTransformedX * 32;
        const y = randTransformedY * 32;

        // Ensure position isn't occupied
        if (this.apple && this.apple.x === x && this.apple.y === y) {
            // Position is occupied by an apple, so try again
            attempted.add([randTransformedX, randTransformedY]);
            return this.generateSpawnLocation(attempted);
        }

        if (this.powerup && this.powerup.x === x && this.powerup.y === y) {
            // Position is occupied by a powerup, so try again
            attempted.add([randTransformedX, randTransformedY]);
            return this.generateSpawnLocation(attempted);
        }

        let currentSnakeBody = this.snakeTail;
        while (currentSnakeBody !== null) {
            if (currentSnakeBody.x === x && currentSnakeBody.y === y) {
                // Position is occupied by the snake, so try again
                attempted.add([randTransformedX, randTransformedY]);
                return this.generateSpawnLocation(attempted);
            }
            currentSnakeBody = currentSnakeBody.parent;
        }

        // The space isn't taken by an apple, powerup or snake, so is free
        this.paused = false;
        return [x, y];
    }

    moveSnake() {
        if (this.paused || this.gameOver) return;

        // If the user hasn't changed direction, keep going in same direction
        if (this.moveQueue.length === 0) this.moveQueue.push(this.lastVector);

        // Handle vectors in `moveQueue`
        for (let vector of this.moveQueue) {
            let currentSnakeBody = this.snakeTail;
            while (currentSnakeBody.parent !== null) {
                this.snakeTail.prevSpot = { x: this.snakeTail.x, y: this.snakeTail.y };

                // Move image
                currentSnakeBody.img.setPosition(
                    currentSnakeBody.parent.x,
                    currentSnakeBody.parent.y
                );
                currentSnakeBody.img.setAngle(vector.x === 0 ? 0 : 90);

                // Set `currentSnakeBody` to the next body
                currentSnakeBody = currentSnakeBody.parent;
            }
            // NB: `currentSnakeBody` is now the head

            if (vector !== this.lastVector) {
                // Going a new direction, so we need to rotate the head
                if (vector.x === -1) {
                    // Now going left
                    currentSnakeBody.img.setAngle(0);
                } else if (vector.x === 1) {
                    // Now going right
                    currentSnakeBody.img.setAngle(180);
                } else if (vector.y === -1) {
                    // Now going up
                    currentSnakeBody.img.setAngle(90);
                } else {
                    // Now going down
                    currentSnakeBody.img.setAngle(270);
                }
            }

            // Move the head
            if (currentSnakeBody.transformedX + vector.x < 1) {
                // Would be going off the left of screen, so "wrap" around
                currentSnakeBody.transformedX = this.game.config.width / 32 - 1;
            } else if (currentSnakeBody.transformedX + vector.x >= this.game.config.width / 32) {
                currentSnakeBody.transformedX = 1;
            } else if (currentSnakeBody.transformedY + vector.y < 2) {
                // Would be going off the top of screen, so "wrap" around
                currentSnakeBody.transformedY = this.game.config.height / 32 - 1;
            } else if (currentSnakeBody.transformedY + vector.y >= this.game.config.height / 32) {
                // Would be going off the bottom of screen, so "wrap" around
                currentSnakeBody.transformedY = 2;
            } else {
                // Move stays within the boundaries, so just execute it
                currentSnakeBody.transformedX += vector.x;
                currentSnakeBody.transformedY += vector.y;
            }

            // Handle head collisions with other parts of snake
            this.handleHeadCollision(currentSnakeBody);

            // Handle apple collection
            this.handleAppleCollection(currentSnakeBody);

            // Handle powerup collection
            this.handlePowerupCollection(currentSnakeBody);

            // Update movement trackers
            this.lastVector = vector;
            this.moveQueue.splice(0, 1);
        }
    }

    addApple() {
        if (this.apple !== null) return; // can only have 1 apple at a time
        this.apple = this.add.image(...this.generateSpawnLocation(), "apple");
    }

    addSnakeBody() {
        if (this.paused) return;
        const newBodyImg = this.add.image(
            this.snakeTail.prevSpot.x,
            this.snakeTail.prevSpot.y,
            "snakebody"
        );
        const rotation = this.lastVector.x === 0 ? 0 : 90;
        newBodyImg.angle = rotation;
        const newSnakeTail = new SnakeBody(this.snakeTail, newBodyImg);
        newSnakeTail.img.active = true;
        newSnakeTail.img._visible = true;
        this.snakeTail = newSnakeTail;
    }

    handleAppleCollection(currentSnakeBody) {
        if (
            this.apple !== null &&
            currentSnakeBody.x === this.apple.x &&
            currentSnakeBody.y === this.apple.y
        ) {
            // Collected the apple

            this.applesCollected += 1;
            // Destroy the collected apple
            this.apple.destroy();
            this.apple = null;

            // Play pickup sound
            this.pickupSound.play();

            // Add another body to the snake
            this.addSnakeBody();

            // Update score
            this.score++;
            this.scoreLabel.setText(`Score: ${this.score.toString().padStart(3, "0")}`);
            this.addApple();
        }
    }

    handleHeadCollision(currentSnakeBody) {
        if (this.activePowerup !== "star") {
            // We only check when we don't have the star powerup active
            // since that allows you to collide with other parts of snake
            let nCurrentSnakeBody = this.snakeTail;
            while (nCurrentSnakeBody.parent !== null) {
                if (
                    nCurrentSnakeBody.x === currentSnakeBody.x &&
                    nCurrentSnakeBody.y === currentSnakeBody.y
                ) {
                    // Collided with a snake body, so end game
                    this.time.timeScale = 0;
                    this.gameOver = true;

                    this.sound.stopAll();

                    this.scene.launch("deathMenu");
                    return;
                }
                nCurrentSnakeBody = nCurrentSnakeBody.parent;
            }
        }
    }

    handlePowerupCollection(currentSnakeBody) {
        if (
            this.powerup !== null &&
            !this.activePowerup &&
            currentSnakeBody.x === this.powerup.x &&
            currentSnakeBody.y === this.powerup.y
        ) {
            this.activePowerup = this.powerup.texture.key.replace("_", " "); // name of the powerup img file
            this.collectedPowerups[this.activePowerup] += 1;

            const powerupInfo = this.getPowerup(this.activePowerup);

            if (powerupInfo.display) this.powerupLabel.setText(`Powerup: ${this.activePowerup}`);

            this.time.timeScale *= powerupInfo.speedMultiplier;
            this.speedLabel.setText(`Speed: ${this.time.timeScale}x`);

            if (powerupInfo.scoreIncrease > 0) {
                this.score += powerupInfo.scoreIncrease;
                this.scoreLabel.setText(`Score: ${this.score.toString().padStart(3, "0")}`);
            }

            this.powerup.destroy();

            powerupInfo.sound.play();
            if (!powerupInfo.display) {
                // This powerup expires instantly, so remove it instantly
                this.removePowerup();
            } else {
                // Cancel powerup once it expires
                this.time.addEvent({
                    delay: powerupInfo.speedMultiplier
                        ? powerupInfo.duration * powerupInfo.speedMultiplier // account for the fact that speed multiplier messes with timer
                        : powerupInfo.duration,
                    callback: this.removePowerup,
                    callbackScope: this,
                    loop: false,
                });
            }
        }
    }

    addPowerup() {
        if (this.powerup !== null) return; // there's already a powerup on the board

        const powerupToSpawn = this.powerups[Math.floor(Math.random() * this.powerups.length)];
        this.powerup = this.add.image(
            ...this.generateSpawnLocation(),
            powerupToSpawn.name.replace(" ", "_")
        );
        this.time.addEvent({
            delay: powerupToSpawn.duration,
            callback: () => {
                if (this.activePowerup || !this.powerup) return; // picked up the powerup in time
                this.powerup.destroy();
                this.powerup = null;
                this.reschedulePowerup();
            },
            callbackScope: this,
            loop: false,
        });
        this.spawnedPowerups[powerupToSpawn.name] += 1;
    }

    removePowerup() {
        if (!this.activePowerup) return; // there seems to be a race condition that sometimes calls this function after its finished
        const powerupInfo = this.getPowerup(this.activePowerup);
        if (powerupInfo.display) powerupInfo.sound.stop(); // powerup isn't instant, so force stop sound (instant powerups have short sounds)

        this.powerupLabel.setText("Powerup: N/A");

        this.time.timeScale = 1; // reset speed back to default
        this.speedLabel.setText("Speed: 1x");

        this.time.addEvent({
            delay: powerupInfo.gracePeriod || 0,
            callback: () => {
                this.powerup = null;
                this.activePowerup = null;
                this.reschedulePowerup();
            },
            callbackScope: this,
        });
    }

    reschedulePowerup() {
        const delay = Math.floor(Math.random() * (10 - 5 + 1)) + 5; // random number 5-10 inclusive
        this.time.addEvent({
            delay: delay * 1000,
            callback: this.addPowerup,
            callbackScope: this,
            loop: false,
        });
    }

    getPowerup(powerupName) {
        for (let powerup of this.powerups) {
            if (powerup.name === powerupName) {
                return powerup;
            }
        }
        return null;
    }

    create() {
        // Runs on scene load

        // Setup stats
        this.applesCollected = 0;
        this.collectedPowerups = {};
        this.spawnedPowerups = {};

        this.time.timeScale = 1; // ensure speed is reset when starting game
        if (!this.game.scene.keys.mainMenu.music.isPlaying) {
            this.game.scene.keys.mainMenu.music.play(); // ensure music is playing (won't be when coming directly from death screen)
        }

        this.sound.pauseOnBlur = false; // don't pause sound when losing focus

        // Setup sound assets
        this.pickupSound = this.sound.add("audio_pickup");
        this.deathSound = this.sound.add("audio_death");
        this.defaultPowerupSound = this.sound.add("audio_golden_apple");

        // Setup powerups
        this.powerups = [
            {
                name: "star",
                display: true,
                duration: 5000,
                gracePeriod: 1000, // effects last for an extra second
                scoreIncrease: 0,
                sound: this.sound.add("audio_star"),
                speedMultiplier: 1.25,
            },
            {
                name: "golden apple",
                display: false,
                duration: 5000,
                gracePeriod: 0,
                scoreIncrease: 5,
                sound: this.defaultPowerupSound,
                speedMultiplier: 1,
            },
            {
                name: "fast",
                display: true,
                duration: 5000,
                gracePeriod: 0,
                scoreIncrease: 0,
                sound: this.defaultPowerupSound,
                speedMultiplier: 1.25,
            },
            {
                name: "slow",
                display: true,
                duration: 5000,
                gracePeriod: 0,
                scoreIncrease: 0,
                sound: this.defaultPowerupSound,
                speedMultiplier: 0.75,
            },
        ];
        for (let powerup of this.powerups) {
            // Add to the stats
            this.collectedPowerups[powerup.name] = 0;
            this.spawnedPowerups[powerup.name] = 0;
        }

        // Powerup loop
        this.powerup = null;
        this.activePowerup = null;
        this.time.addEvent({
            delay: 10000, // after 10 seconds, spawn the first powerup
            callback: this.addPowerup,
            callbackScope: this,
            loop: false,
        });

        // Setup text labels
        this.score = 0;

        const styleOptions = {
            font: "24px Arial",
            fill: "yellow",
        };

        this.speedLabel = this.add.text(25, 12.5, "Speed: 1x", styleOptions);

        this.powerupLabel = this.add
            .text(Math.floor(this.game.config.width / 2), 25, "Powerup: N/A", {
                ...styleOptions,
                align: "center",
            })
            .setOrigin(0.5);

        this.scoreLabel = this.add
            .text(this.game.config.width - 75, 25, "Score: 000", styleOptions)
            .setOrigin(0.5);

        // Setup snake
        const centerX =
            (((this.game.config.width / 32) % 2 == 0
                ? this.game.config.width / 32
                : this.game.config.width / 32 - 1) /
                2) *
            32;

        const centerY =
            (((this.game.config.height / 32) % 2 == 0
                ? this.game.config.height / 32
                : this.game.config.height / 32 - 1) /
                2) *
            32;

        const snakeHead = new SnakeBody(
            null,
            this.add.image(centerX, centerY, "snakehead").setDepth(1)
        );

        const bodyImg = this.add.image(snakeHead.x + 32, snakeHead.y, "snakebody").setDepth(0); // to the right of head, i.e. moving left
        bodyImg.setAngle(90);
        this.snakeTail = new SnakeBody(snakeHead, bodyImg);

        // Setup movement (moving left)
        this.moveQueue = [{ x: -1, y: 0 }];
        this.lastVector = { x: -1, y: 0 };

        this.cursorKeys = this.input.keyboard.createCursorKeys();
        this.moveTimer = this.time.addEvent({
            delay: 200,
            callback: this.moveSnake, // move snake every 200ms
            callbackScope: this,
            loop: true,
        });

        this.lastKeyPress = -Infinity;
        this.lastPaused = -Infinity;
        this.gameOver = false;

        // Spawn initial apple
        this.apple = null;
        this.addApple();

        // Setup timer that runs every second, so we can get how long a user survived
        this.timeSurvived = 0;
        this.time.addEvent({
            delay: 1000,
            callback: () => (this.timeSurvived += this.time.timeScale),
            callbackScope: this,
            loop: true,
        });
    }

    addToMoveQueue(vector) {
        for (let move of this.moveQueue) {
            if (move.x == vector.x || move.y == vector.y) {
                return;
            }
        }
        this.moveQueue.push(vector);
    }

    update(time) {
        // Runs every frame

        // Process any keyboard inputs for changing direction
        if (this.cursorKeys.space.isDown && time - this.lastPaused > 250) {
            if (this.paused) {
                this.time.timeScale = this.prevTimeScale;
                this.game.sound.resumeAll();
                this.paused = false;
                this.scene.stop("pauseMenu");
                this.scene.stop("settingsMenu");
            } else {
                this.prevTimeScale = this.time.timeScale;
                this.time.timeScale = 0;
                this.game.sound.pauseAll();
                this.paused = true;
                this.scene.launch("pauseMenu");
            }
            this.speedLabel.setText(`Speed: ${this.time.timeScale}x`);

            this.lastPaused = time;
            return;
        }
        if (this.gameOver) {
            return;
        }

        if (time - this.lastKeyPress < 100) {
            return;
        }

        if (this.cursorKeys.left.isDown) {
            if (this.lastVector.x == -1) return; // already going left
            if (this.lastVector.x == 1 && this.moveQueue.length === 0) {
                return; // going right, so turning left would kill player
            }
            this.addToMoveQueue({ x: -1, y: 0 });
            this.lastKeyPress = time;
        } else if (this.cursorKeys.up.isDown) {
            if (this.lastVector.y == -1) return; // already going up
            if (this.lastVector.y == 1 && this.moveQueue.length === 0) {
                return; // going down, so turning up would kill player
            }
            this.addToMoveQueue({ x: 0, y: -1 });
            this.lastKeyPress = time;
        } else if (this.cursorKeys.right.isDown) {
            if (this.lastVector.x == 1) return; // already going left
            if (this.lastVector.x == -1 && this.moveQueue.length === 0) {
                return; // going left, so turning right would kill player
            }
            this.addToMoveQueue({ x: 1, y: 0 });
            this.lastKeyPress = time;
        } else if (this.cursorKeys.down.isDown) {
            if (this.lastVector.y == 1) return; // already going down
            if (this.lastVector.y == -1 && this.moveQueue.length === 0) {
                return; // going up, so turning down would kill player
            }
            this.addToMoveQueue({ x: 0, y: 1 });
            this.lastKeyPress = time;
        }
    }
}
