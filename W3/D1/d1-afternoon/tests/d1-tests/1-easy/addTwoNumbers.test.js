const {addTwoNumbers} = require('../../../d1-tests/1-easy/addTwoNumbers')


describe('testing addTwoNumbers.js', () => {
    // checks if addTwoNumbers takes 4 and 6 and returns 10
    test('adding 4 and 6 returns 10', () => {
        expect(addTwoNumbers(4, 6)).toBe(10);
    });

    // checks if addTwoNumbers takes 2 and 0 and returns 2
    test('adding 2 and 0 returns 2', () => {
        expect(addTwoNumbers(2, 0)).toBe(2);
    });

    // checks if addTwoNumbers takes -4 and -6 and returns -10
    test('adding -4 and -6 returns -10', () => {
        expect(addTwoNumbers(-4, -6)).toBe(-10);
    });
});