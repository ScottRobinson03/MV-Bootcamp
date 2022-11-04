const seed = require('../../db/seed');
const { Board, Cheese, User } = require('../../models');
const { cheeseData, boardData, userData, cheeseToBoard, boardToCheese } = require('../../db/data');

function sort(obj) {
    for (let key of Object.keys(obj)) {
        obj[key] = Array.from(obj[key]).sort();
    }
    return obj;
}

describe('Testing seed.js', () => {
    beforeEach(async () => {
        await seed();
    });

    describe('Tables get populated correctly', () => {
        it('Board table populated correctly (with user relation)', async () => {
            const boards = (await Board.findAll()).map((board, index) => {
                return ({
                    ...{UserId: index+1},
                    ...board.toJSON()
                    
                });
            });
            // `boards` will also have a corresponding `UserId`, which `boardData`
            // doesn't have so we need to add `UserId` to each item in `boardData`.
            for (let i = 0; i < boardData.length; i++) {
                boardData[i]['UserId'] = i + 1;
            }
            expect(boards).toEqual(boardData);
        });

        it('Cheese table populated correctly', async () => {
            const cheeses = (await Cheese.findAll()).map(cheese => cheese.toJSON());
            expect(cheeses).toEqual(cheeseData);
        });
    
        it('Users table populated correctly', async () => {
            const users = (await User.findAll()).map(user => user.toJSON());
            expect(users).toEqual(userData);
        });

        it('Cheeses are correctly added to boards & vice-versa', async () => {
            let receivedBoardToCheese = {};
            let receivedCheeseToBoard = {};

            let expectedBoardToCheese = {};
            let expectedCheeseToBoard = {};

            for (let [boardId, cheeseIds] of Object.entries(boardToCheese)) {
                boardId = +boardId;
                
                // Update `expectedBoardToCheese`
                if (expectedBoardToCheese[boardId] === undefined) expectedBoardToCheese[boardId] = new Set(cheeseIds);
                else cheeseIds.forEach(cheeseId => expectedBoardToCheese[boardId].add(cheeseId));

                // Update `expectedCheeseToBoard` for each `cheeseId` in `cheesIds`
                cheeseIds.forEach(cheeseId => {
                    if (expectedCheeseToBoard[cheeseId] === undefined) {
                        expectedCheeseToBoard[cheeseId] = new Set([boardId]);
                    } else expectedCheeseToBoard[cheeseId].add(boardId);
                });

                // Get the actual cheese ids of this board
                const board = await Board.findByPk(boardId);
                const cheeses = (await board.getCheeses()).map(cheese => cheese.id);

                // Update `receivedBoardToCheese`
                if (receivedBoardToCheese[boardId] === undefined) receivedBoardToCheese[boardId] = new Set(cheeses);
                else cheeses.forEach(cheeseId => receivedBoardToCheese[boardId].add(cheeseId));

                // Update `receivedCheeseToBoard`
                cheeses.forEach(cheeseId => {
                    if (receivedCheeseToBoard[cheeseId] === undefined) receivedCheeseToBoard[cheeseId] = new Set([boardId]);
                    else receivedCheeseToBoard[cheeseId].add(boardId);
                });
            }

            for (let [cheeseId, boardIds] of Object.entries(cheeseToBoard)) {
                cheeseId = +cheeseId;

                // Update `expectedCheeseToBoard`
                if (expectedCheeseToBoard[cheeseId] === undefined) expectedCheeseToBoard[cheeseId] = new Set(boardIds);
                else boardIds.forEach(boardId => expectedCheeseToBoard[cheeseId].add(boardId));

                // Update `expectedBoardToCheese` for each `boardId` in `boardIds`
                boardIds.forEach(boardId => {
                    if (expectedBoardToCheese[boardId] === undefined) {
                        // `boardId` hasn't yet been seen
                        expectedBoardToCheese[boardId] = new Set([cheeseId]);
                    } else expectedBoardToCheese[boardId].add(cheeseId);
                });

                // Get the actual board ids of this cheese
                const cheese = await Cheese.findByPk(cheeseId);
                const boards = (await cheese.getBoards()).map(board => board.id);
                
                // Updated `receivedCheeseToBoard`
                if (receivedCheeseToBoard[cheeseId] === undefined) receivedCheeseToBoard[cheeseId] = new Set(boards);
                else boards.forEach(boardId => receivedCheeseToBoard[cheeseId].add(boardId));

                // Update `receivedBoardToCheese`
                boards.forEach(boardId => {
                    if (receivedBoardToCheese[boardId] === undefined) receivedBoardToCheese[boardId] = new Set([cheeseId]);
                    else receivedBoardToCheese[boardId].add(cheeseId);
                });
            }

            // Sort the four objects so that the equality works
            receivedBoardToCheese = sort(receivedBoardToCheese);
            receivedCheeseToBoard = sort(receivedCheeseToBoard);

            expectedBoardToCheese = sort(expectedBoardToCheese);
            expectedCheeseToBoard = sort(expectedCheeseToBoard);

            expect(receivedBoardToCheese).toEqual(expectedBoardToCheese);
            expect(receivedCheeseToBoard).toEqual(expectedCheeseToBoard);
        });
    });
});