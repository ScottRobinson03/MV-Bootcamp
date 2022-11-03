const Author = require('./author.model');
const Book = require('./book.model');
const Borrower = require('./borrower.model');
const Quote = require('./quote.model');

Author.hasMany(Book); // one author has many books
Book.belongsTo(Author); // one book has one author

Borrower.hasOne(Book); // one borrower has one book
Book.belongsTo(Borrower); // one book has one borrower

Book.belongsToMany(Quote, {through: 'Book_Quote'}); // one book has many quotes
Quote.belongsToMany(Book, {through: 'Book_Quote'}); // one quote has many books

module.exports = { Author, Book, Borrower, Quote };