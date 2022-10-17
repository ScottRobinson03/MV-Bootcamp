const {multiplyTwoNumbers} = require('../../../d1-tests/1-easy/multiplyTwoNumbers')


describe('testing multiplyTwoNumbers.js', () => {
    // checks if multiplyTwoNumbers multiplies 3 and 4 and returns 12
    test('3 times 4 returns 12', () => {
        expect(multiplyTwoNumbers(3, 4)).toBe(12);
    });

    // checks if multiplyTwoNumbers multiplies 0 and 3 and returns 0
    test('0 times 3 returns 0', () => {
        expect(multiplyTwoNumbers(0, 3)).toBe(0);
    });

    // checks if multiplyTwoNumbers multiplies 5 and -6 and returns -30
    test('5 times -6 returns -30', () => {
        expect(multiplyTwoNumbers(5, -6)).toBe(-30);
    });

    // checks if multiplyTwoNumbers multiplies -6 and -4 and returns 24
    test('-6 times -4 returns 24', () => {
        expect(multiplyTwoNumbers(-6, -4)).toBe(24);
    });
});