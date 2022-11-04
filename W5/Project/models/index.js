const { DataTypes } = require('sequelize');
const { db } = require('../db/db');

const BoardModel = require('./board.model');
const CheeseModel = require('./cheese.model');
const UserModel = require('./user.model');

const Board = BoardModel(db, DataTypes);
const Cheese = CheeseModel(db, DataTypes);
const User = UserModel(db, DataTypes);

User.hasMany(Board); /// a user can have multiple boards
Board.belongsTo(User); // a board can only have one user

Board.belongsToMany(Cheese, {through: 'Cheese_Board', timestamps: false}); // a board can belong to multiple cheeses
Cheese.belongsToMany(Board, {through: 'Cheese_Board', timetsamps: false}); // a cheese can be on multiple board

module.exports = { Board, Cheese, User };