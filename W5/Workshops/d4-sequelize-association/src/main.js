const { Author, Book, Borrower, Quote } = require('../models');
const seed = require('../db/seed');

function flatten(rec) {
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
}
async function getBooksOfAuthor(author) {
    return (await author.getBooks()).map(book => book.toJSON());
}

async function getQuotesOfBook(book) {
    return (await book.getQuotes()).map(quote => flatten(quote));
}

async function main() {
    await seed();

    // one to one section

    // const borrower1 = await Borrower.findByPk(1);
    // console.log(borrower1.toJSON());

    // const book = await borrower1.getBook()
    // console.log(book.toJSON());

    const borrowers = await Borrower.findAll();

    const book = await Book.findByPk(2);
    console.log("Before setting borrower:")
    console.table([book.toJSON()]);
    await book.setBorrower(borrowers[3]);
    console.log("\nAfter setting borrower:")
    console.table([book.toJSON()])

    // one to many section
    const author = await Author.findByPk(5);
    console.log(`\nBooks of ${author.name}:`)
    console.table((await getBooksOfAuthor(author)))
    console.log(`Total books: ${await author.countBooks()}`)

    // many to many section
    await book.createQuote({quote: "Hello, World!"});
    await book.addQuote(await Quote.findByPk(2));
    console.log(`\nQuotes of ${book.title}`);
    console.table(await getQuotesOfBook(book));
}

if (require.main === module) {
    main();
}
