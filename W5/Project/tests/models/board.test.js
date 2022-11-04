const {
    sequelize,
    dataTypes,
    checkModelName,
    checkPropertyExists
} = require('sequelize-test-helpers');

const BoardModel = require('../../models/board.model');

describe('Testing Board Model', () => {
    const Board = BoardModel(sequelize, dataTypes);
    const board = new Board();
    describe('Ensuring model is named correctly', () => {
        checkModelName(Board)('Board');
    });

    describe('Ensuring properties exist', () => {
        checkPropertyExists(board)('type');
        checkPropertyExists(board)('description');
        checkPropertyExists(board)('rating');
    });

    describe('Association is made', () => {
        it('defined a belongsToMany association with Cheese', () => {
            const belongsToMany = jest.spyOn(Board, 'belongsToMany');
            const Cheese = 'some dummy cheese';

            Board.associate(Cheese);
            expect(belongsToMany).toHaveBeenCalledWith(Cheese, {through: 'Cheese_Board'});
        });
    });
});