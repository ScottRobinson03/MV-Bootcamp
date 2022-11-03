const { Model, DataTypes } = require('sequelize');
const db = require('../db/db');

class Quote extends Model {

}

Quote.init({
    quote: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {sequelize: db});

module.exports = Quote;