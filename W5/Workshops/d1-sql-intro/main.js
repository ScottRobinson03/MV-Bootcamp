const db = require('./db');

const books = [
    {
        author: "Peter Harrison",
        title: "The Territories of Science and Religion",
        subject: "History"
    },
    {
        author: "Margin Heidegger",
        title: "Being and Time",
        subject: "Philosophy"
    },
    {
        author: "Rita Felski",
        title: "The Limits of Critique",
        subject: "Literary Criticism"
    },
    {
        author: "Michael Polanyi",
        title: "The Tacit Dimension",
        subject: "Philosophy"
    },
    {
        author: "Michael Polanyi",
        title: "Personal Knowledge",
        subject: "Philosophy"
    },
    {
        author: "Hans-Georg Gadamer",
        title: "The Relevance of the Beautiful",
        subject: "Philosophy"
    },
    {
        author: "DC Schlinder",
        title: "Plato's Critique of Impure Reason",
        subject: "Philosophy"
    }
];

async function executeSelectQuery(query) {
    [result, _] = await db.query(query);
    console.table(result);
}

async function main() {
    await db.query(
        "DROP TABLE IF EXISTS books;"
    );

    // Creating
    await db.query(`
        CREATE TABLE IF NOT EXISTS books (
            id INTEGER PRIMARY KEY,
            author TEXT,
            title TEXT NOT NULL,
            subject TEXT,
            read INTEGER DEFAULT 0,
            times_read INTEGER DEFAULT 0
        );
    `);

    // Inserting
    for (let book of books) {
        await db.query(`
            INSERT INTO books (author, title, subject) VALUES
            ("${book.author}", "${book.title}", "${book.subject}");
        `);
    }

    // Updates
    await db.query(`
        UPDATE books
        SET times_read = 2, read = 1
        WHERE author = 'Michael Polanyi' OR author = 'Hans-Georg Gadamer';
    `);

    await db.query(`
        UPDATE books
        SET author = 'D.C. Schlinder', read = 1, times_read = 1
        WHERE author = 'DC Schlinder';
    `);

    // Deletions
    await db.query(`
        DELETE FROM books
        WHERE title='The relevance of the Beautiful';
    `);

    // Read
    await executeSelectQuery(`
        SELECT * FROM books;
    `);

    await executeSelectQuery(`
        SELECT DISTINCT author FROM books;
    `);

    await executeSelectQuery(`
        SELECT AVG(times_read) FROM books;
    `);

    await executeSelectQuery(`
        SELECT author, COUNT(*) AS 'Number of Books'
        FROM books
        GROUP BY 1
        ORDER BY 2 DESC;
    `);
}

main();