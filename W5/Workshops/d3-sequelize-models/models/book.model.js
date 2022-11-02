const { DataTypes } = require('sequelize');
const db = require('../db/db');
const Author = require('./author.model');


const Book = db.define('book', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    times_read: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    author_id: {
        type: DataTypes.INTEGER,
        defaultValue: null,
        references: {
            model: Author,
            key: 'id'
        }
    }
});


//Book.associate(Author, 'author_id');
Book.belongsTo(Author, {foreignKey: 'author_id'});

module.exports = Book;