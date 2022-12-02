import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import scoreboardRouter from "./routes/scoreboard.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/scoreboard", scoreboardRouter);

app.listen(5001, async () => {
    await mongoose.connect("mongodb://127.0.0.1/snake", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Listening on port 5001");
});
