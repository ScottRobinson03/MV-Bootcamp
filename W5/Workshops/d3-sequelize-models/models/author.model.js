const { Model, DataTypes } = require('sequelize');
const db = require('../db/db');

class Author extends Model {

}

Author.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    field: {
        type: DataTypes.STRING
    }
}, {sequelize: db});

module.exports = Author;