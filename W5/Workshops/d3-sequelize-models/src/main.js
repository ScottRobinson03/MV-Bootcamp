const { Author, Book } = require("../models");
const { Op } = require('sequelize');
const seed = require("../db/seed")

async function findAll(model, options) {
    return (await model.findAll(options)).map(rec => {
        const record = rec.toJSON();

        // Flatten first layer of values
        Object.keys(record).forEach(key => {
            const value = record[key];
            if ((value instanceof Object) && !(value instanceof Array)) {
                // `value` needs to be flattened

                for (let nkey of Object.keys(value)) {
                    record[nkey] = value[nkey];
                }
                delete record[key];
            } else {
                record[key] = value
            }
        })
        return record
    });
}

async function main() {
    await seed();

    await Author.update({
        name: "Tom Holland"
    }, {where: {name: "Rom Holland"}});

    // SELECT title AS 'Title', author_id AS 'Author ID' FROM Books
    const books = await findAll(
        Book,
        {
            attributes: [
                ['title', 'Title'], // title AS 'Title'
                ['author_id', 'Author ID'] // author_id AS 'Author ID'
            ]
        }
    );
    console.table(books);

    // SELECT id AS 'ID', name AS 'Name', field AS 'Field' FROM Authors
    const authors = await findAll(
        Author,
        {
            attributes: [
                ['id', 'ID'], // id AS 'ID'
                ['name', 'Name'], // name AS 'Name'
                ['field', 'Field'] // field AS 'Field'
            ]
        }
    );
    console.table(authors);

    // DELETE FROM Books WHERE author_id = 6 OR author_id = 7
    await Book.destroy({
        where: {
            author_id: {
                [Op.or]: [6, 7]
            }
        }
    });

    /*
    SELECT b.title AS 'Book Title', a.id AS 'Author ID', a.name AS 'Author Name', a.field AS 'Author Field'
    FROM Books b INNER JOIN Authors a ON a.id = b.author_id WHERE a.field LIKE '%Philosophy%' AND b.title lIKE 'The%'
    */
    console.table(
        await findAll(
            Book,
            {
                attributes: [
                    ['title', 'Book Title']
                ],
                include: [
                    {
                        model: Author,
                        required: true,
                        attributes: [
                            ['id', 'Author ID'],
                            ['name', 'Author Name'],
                            ['field', 'Author Field']
                        ],
                        where: {
                            field: {
                                [Op.like]: '%Philosophy%'
                            }
                        }
                    }
                ],
                where: {
                    title: {
                        [Op.like]: 'The%'
                    }
                }
            }
        )
    )
}

main();