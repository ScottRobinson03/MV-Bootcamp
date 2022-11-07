const express = require('express');
const app = express();

app.use("/test", express.static("public"));

app.listen(5001, () => {
    console.log("Listening on port 5001");
});