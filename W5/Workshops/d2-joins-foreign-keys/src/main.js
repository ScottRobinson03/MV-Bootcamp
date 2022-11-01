const db = require('../db/db');

async function main() {
    // Drop tables
    await db.query(`
        DROP TABLE IF EXISTS books;
    `);

    await db.query(`
        DROP TABLE IF EXISTS authors;
    `);

    // Create tables
    await db.query(`
        CREATE TABLE IF NOT EXISTS authors(
            id INTEGER PRIMARY KEY,
            name TEXT NOT NULL
        );
    `);

    await db.query(`
        CREATE TABLE IF NOT EXISTS books(
            id INTEGER PRIMARY KEY,
            title TEXT NOT NULL,
            field TEXT,
            author_id INTEGER DEFAULT NULL REFERENCES authors (id)
        );
    `);

    // Insert data
    await db.query(`
        INSERT INTO authors (name) VALUES
        ("Peter Harrison"),
        ("Hans-Georg Gadamer"),
        ("Michael Polanyi"),
        ("Rita Felsky"),
        ("Leo Tolstoi"),
        ("Mary Midgely")
    `);

    await db.query(`
        INSERT INTO books (title, author_id, field) VALUES
        ("Truth and Method", 2, "Philosophy"),
        ("The Relevance of the Beautiful", 2, "Philosophy"),
        ("Personal Knowledge", 3, "Philosophy"),
        ("The Tacit Dimension", 3, "Philosophy"),
        ("The Limits of Critique", 4, "Literary Criticism"),
        ("The Fall of Man and the Foundation of Science", 1, "History"),
        ("Ressurection", 5, "Literature"),
        ("Focusing", null, "Philosophy");
    `);

    // Select queries
    const [result, _] = await db.query(`
        SELECT A.name AS 'author', B.title
        FROM authors A
        FULL JOIN books B
        ON A.id = B.author_id;
    `);
    console.table(result);
}

main();