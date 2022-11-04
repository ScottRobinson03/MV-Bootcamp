const {
    sequelize,
    dataTypes,
    checkModelName,
    checkPropertyExists
} = require('sequelize-test-helpers');

const CheeseModel = require('../../models/cheese.model');

describe('Testing Cheese Model', () => {
    const Cheese = CheeseModel(sequelize, dataTypes);
    const cheese = new Cheese();
    describe('Ensuring model is named correctly', () => {
        checkModelName(Cheese)('Cheese');
    });

    describe('Ensuring properties exist', () => {
        checkPropertyExists(cheese)('title');
        checkPropertyExists(cheese)('description');
    });

    describe('Association is made', () => {
        it('defined a belongsToMany association with Board', () => {
            const belongsToMany = jest.spyOn(Cheese, 'belongsToMany');
            const Board = 'some dummy board';

            Cheese.associate(Board);
            expect(belongsToMany).toHaveBeenCalledWith(Board, {through: 'Cheese_Board'});
        });
    });
});