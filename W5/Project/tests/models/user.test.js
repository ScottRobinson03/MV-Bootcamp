const {
    sequelize,
    dataTypes,
    checkModelName,
    checkPropertyExists
} = require('sequelize-test-helpers');

const UserModel = require('../../models/user.model');

describe('Testing User Model', () => {
    const User = UserModel(sequelize, dataTypes);
    const user = new User();
    describe('Ensuring model is named correctly', () => {
        checkModelName(User)('User');
    });

    describe('Ensuring properties exist', () => {
        checkPropertyExists(user)('name');
        checkPropertyExists(user)('email');
    });

    describe('Association is made', () => {
        it('defined a hasMany association with Board', () => {
            const hasMany = jest.spyOn(User, 'hasMany');
            const Board = 'some dummy board';

            User.associate(Board);
            expect(hasMany).toHaveBeenCalledWith(Board);
        });
    });
});