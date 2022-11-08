const express = require('express');

const app = express();


app.use(express.json()); // add a JSON parser to the web server

const logins = {
    user01: "pass01",
    user02: "pass02",
    user03: "pass03"
};

app.get("/", (_, resp) => {
    resp.send(logins);
});

app.get("/:username", (req, resp) => {
    resp.send(logins[req.params.username]);
});

app.post("/", (req, resp) => {
    const username = req.body.username;
    const password = req.body.password;

    logins[username] = password;
    resp.sendStatus(200);
});

app.patch("/:username", (req, resp) => {
    const username = req.params.username;
    const newPassword = req.body.password;

    logins[username] = newPassword;
    resp.sendStatus(200);
});

app.delete("/:username", (req, resp) => {
    const username = req.params.username;
    delete logins[username];
    resp.sendStatus(200);
});

app.listen(5001, () => {
    console.log("Listening on port 5001");
});