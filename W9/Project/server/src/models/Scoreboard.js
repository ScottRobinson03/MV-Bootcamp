import mongoose from "mongoose";

export default mongoose.model(
    "scoreboard",
    new mongoose.Schema({
        username: String,
        score: Number,
        collectedApples: Number,
        collectedPowerups: Object,
        secondsSurvived: Number,
        spawnedPowerups: Object,
    })
);
