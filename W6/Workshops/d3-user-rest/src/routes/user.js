const { Router } = require('express');
const User = require('../models/User');

const router = Router();

router.get("/health", (req, resp) => {
    resp.sendStatus(200);
});

router.post("/", async (req, resp) => {
    try {
        const user = await User.create(req.body);
        resp.json(user.toJSON());
    } catch (error) {
        if (error.name === "SequelizeUniqueConstraintError") {
            resp.status(400).send("Email must be unique");
        } else {
            resp.status(500).send(error);
        }
    }
});

module.exports = router;