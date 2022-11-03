const { Author, Book, Borrower, Quote } = require('../models');
const db = require('./db');

async function seed() {
    await db.sync({force: true});

    await Author.bulkCreate([
        {
            name: "Tom Holland"
        },
        {
            name: "Karl Popper"
        },
        {
            name: "Imre Lakatos"
        },
        {
            name: "Stephen Gaukoreger"
        },
        {
            name: "Claire Carlisle"
        },
        {
            name: "Maria Rosa Antognazza"
        },
        {
            name: "Judith Wolfe"
        },
        {
            name: "Thomas Kuhn"
        }
    ]);

    await Borrower.bulkCreate([
        {
            name: "Albertus Magnus"
        },
        {
            name: "Nicholas of Cusa"
        },
        {
            name: "Bartolomé de las Casas"
        },
        {
            name: "Simone Weil"
        },
        {
            name: "Nancey Murphy"
        }
    ]);

    await Book.bulkCreate([
        {
            title: "Leibniz: An Intellectual Biography",
            AuthorId: 6,
            BorrowerId: 1
        },
        {
            title: "Heidegger and Theology",
            AuthorId: 7
        },
        {
            title: "Spinoza's Religion",
            AuthorId: 5,
            BorrowerId: 2
        },
        {
            title: "The Collapse of Mechanism and the Rise of Sensibility: Science and the Shaping of Modernity, 1680-1760",
            AuthorId: 4
        },
        {
            title: "The Emergence of a Scientific Culture: Science and the Shaping of Modernity, 1210-1685",
            AuthorId: 4,
            BorrowerId: 3
        },
        {
            title: "The Natural and the Human: Science and the Shaping of Modernity, 1739-1841",
            AuthorId: 4
        },
        {
            title: "The Structure of Scientific Revolutions",
            AuthorId: 8,
            BorrowerId: 3
        }
    ]);

    await Quote.bulkCreate([
        {
            quote: "Being that can be understood is language"
        },
        {
            quote: "Language is the house of being"
        },
        {
            quote: "Educating the mind without educating the heart is no education at all"
        },
        {
            quote: "Quality is not an act, it is a habit"
        },
        {
            quote: "The law is reason, free from passion"
        },
        {
            quote: "Everything changes and nothing stands still"
        }
    ]);
}

if (require.main === module) {
    // We're running file directly (not through import)
    seed();
    console.log("seeded")
}

module.exports = seed;