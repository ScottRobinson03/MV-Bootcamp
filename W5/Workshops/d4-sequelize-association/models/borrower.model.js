const { Model, DataTypes } = require('sequelize');
const db = require('../db/db');

class Borrower extends Model {

}

Borrower.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {sequelize: db});

module.exports = Borrower;