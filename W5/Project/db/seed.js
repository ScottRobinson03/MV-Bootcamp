const { cheeseData, boardData, userData, cheeseToBoard, boardToCheese } = require('./data');
const { Board, Cheese, User } = require('../models');
const { db } = require('./db');


function flatten(rec) {
    const record = rec.toJSON();

    // Flatten first layer of values
    Object.keys(record).forEach(key => {
        const value = record[key];
        if ((value instanceof Object) && !(value instanceof Array)) {
            // `value` needs to be flattened

            for (let nkey of Object.keys(value)) {
                record[nkey] = value[nkey];
            }
            delete record[key];
        } else {
            record[key] = value
        }
    })
    return record
}

async function seed() {
    await db.sync({force: true});

    // Insert Cheeses
    const cheeses = await Cheese.bulkCreate(cheeseData);

    // Insert Users
    const users = await User.bulkCreate(userData);

    // Insert Cheese Boards
    const boards = await Board.bulkCreate(boardData);

    // Assign each board to a user
    for (let i = 0; i < boards.length; i++) {
        await boards[i].setUser(users[i]);
    }

    // Assign some cheeses to some boards (cheese can be on multiple boards)
    for (let [cheeseId, boardIds] of Object.entries(cheeseToBoard)) {
        for (let boardId of boardIds) {
            await cheeses[cheeseId - 1].addBoard(boards[boardId - 1]);
        }
    }

    // Assign some boards to some cheeses (board can have multiple cheeses)
    for (let [boardId, cheeseIds] of Object.entries(boardToCheese)) {
        for (let cheeseId of cheeseIds) {
            await boards[boardId - 1].addCheese(cheeses[cheeseId - 1]);
        }
    }

    /*
    console.log("Users:");
    console.table(users.map(user => user.toJSON()));
    
    console.log("Boards:");
    console.table(boards.map(board => board.toJSON()));
    
    console.log("Cheeses:");
    console.table(cheeses.map(cheese => cheese.toJSON()));

    console.log("Cheese Boards:");
    for (let board of boards) {
        const cheeses = await board.getCheeses();
        if (cheeses.length === 0) console.log(`- ${board.type} doesn't have any cheeses yet.`);
        else {
            console.log(`- ${board.type}'s cheeses:`);
            console.table((await board.getCheeses()).map(cheeseBoard => flatten(cheeseBoard)));
        }
    }
    */
}

if (require.main === module) {
    seed();
}

module.exports = seed;