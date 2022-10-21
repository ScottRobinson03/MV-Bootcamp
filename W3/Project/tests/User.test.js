const User = require('../src/User');

describe('Testing User constructor', () => {
    const user = new User('Scott01', 'Pass01', 18);

    test('username property is correctly set', () => {
        expect(user).toHaveProperty('username', 'Scott01');
    });

    test('password property is correctly set', () => {
        expect(user).toHaveProperty('password', 'Pass01');
    });

    test('age property is correctly set', () => {
        expect(user).toHaveProperty('age', 18);
    });
});