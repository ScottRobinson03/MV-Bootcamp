const express = require('express');
const db = require('./db/db');
const userRouter = require("./routes/user");

app = express();
app.use(express.json()); // enable json parsing
app.use("/user", userRouter);

app.listen(5001, async () => {
    await db.sync();
    console.log("Listening on port 5001");
});