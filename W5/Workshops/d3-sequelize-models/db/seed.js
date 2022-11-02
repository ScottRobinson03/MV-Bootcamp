const { Author, Book } = require('../models'); // automatically goes to the /index.js
const db = require('./db');

async function seed() {
    console.log("Syncing database...")
    await db.sync({force: true});
    console.log("- Synced.\n\nPopulating...");

    // Insert one author
    await Author.create({
        name: "Rom Holland",
        field: "History"
    });

    // Insert multiple authors at once
    await Author.bulkCreate([
        {
            name: "Karl Popper",
            field: "Philosophy of Science"
        },
        {
            name: "Imro Lakatos",
            field: "Philosophy of Science"
        },
        {
            name: "Stephen Gaukroger",
            field: "History and Philosophy"
        },
        {
            name: "Claire Carlisle",
            field: "Philosophy"
        },
        {
            name: "Maria Rosa Antognazza",
            field: "Modern Philosophy"
        },
        {
            name: "Judith Wolfe",
            field: "Philosophical Theology"
        },
        {
            name: "Thomas Kuhn",
            field: "Philosophy of Science"
        }
    ], {validate: true});
    console.log("- Populated Authors.");

    // Insert multiple books at once
    await Book.bulkCreate([
        {
            title: "Leibniz: An Intellectual Biography",
            author_id: 6
        },
        {
            title: "Heidegger and Theology",
            author_id: 7
        },
        {
            title: "Spimoza's Religion",
            author_id: 5
        },
        {
            title: "The Collapse of Mechanism and the Rise of Sensibility",
            author_id: 4
        },
        {
            title: "The Emergence of a Scientific Culture",
            author_id: 4
        },
        {
            title: "The Nautral and the Human",
            author_id: 4
        },
        {
            title: "The Structure of Science",
            author_id: 8
        }
    ], {validate: true});
    console.log("- Populated Books.");
    console.log("\nFinished seeding.")
}

module.exports = seed;