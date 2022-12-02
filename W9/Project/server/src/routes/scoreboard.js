import { Router } from "express";
import { body, validationResult } from "express-validator";
import Scoreboard from "../models/Scoreboard.js";
const router = Router();

router.get("/", async (_, resp) => {
    resp.json(await Scoreboard.find().sort({ score: "desc" }));
});

router.delete("/", async (_, resp) => {
    resp.json(await Scoreboard.deleteMany());
});

router.delete("/lessThan/:num", async (req, resp) => {
    if (isNaN(+req.params.num)) {
        resp.status(400).json([{ message: "Passed number must be an integer" }]);
        return;
    }
    resp.json(await Scoreboard.deleteMany({ score: { $lt: +req.params.num } }));
});

router.post(
    "/",
    body("username")
        .isString()
        .notEmpty()
        .withMessage("A valid username must be provided as a string"),
    body("score")
        .isInt({ min: 0 })
        .withMessage("The user's score must be provided as an integer and cannot be less than 0"),
    body("collectedApples")
        .isInt({ min: 0 })
        .withMessage(
            "The amount of apples collected must be provided as an integer and cannot be less than 0"
        ),
    body("collectedPowerups")
        .isObject()
        .withMessage("The collected powerups must be provided as an object"),
    body("secondsSurvived")
        .isNumeric({ min: 0 })
        .withMessage(
            "The amount of seconds survived must be provided as a number and cannot be less than 0"
        ),
    body("spawnedPowerups")
        .isObject()
        .withMessage("The spawned powerups must be provided as an object"),
    async (req, resp) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            resp.status(400).json(errors.array());
            return;
        }
        resp.status(201).json(await Scoreboard.create(req.body));
    }
);

export default router;
