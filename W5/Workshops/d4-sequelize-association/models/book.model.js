const { Model, DataTypes } = require('sequelize');
const db = require('../db/db');

class Book extends Model {

}

Book.init({
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    timesRead: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
}, {sequelize: db});

module.exports = Book;