const { Model, DataTypes } = require('sequelize');
const db = require('../db/db');

class Author extends Model {

}

Author.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {sequelize: db});

module.exports = Author;