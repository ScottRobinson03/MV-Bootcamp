const { Sequelize } = require('sequelize');
const path = require('path');

const connectDb = (dbLocation) => {
    const db = new Sequelize({
        dialect: 'sqlite',
        storage: dbLocation,
        logging: false
    });
    return db;
}

const db = connectDb(path.join(__dirname, 'cheeseproject.sqlite'));

module.exports = { connectDb, db };