const {subtractTwoNumbers} = require('../../../d1-tests/1-easy/subtractTwoNumbers')


describe('testing subtractTwoNumbers.js', () => {
    // checks if subtractTwoNumbers takes 4 from 10 and returns 6
    test('10 minus 4 returns 6', () => {
        expect(subtractTwoNumbers(10, 4)).toBe(6);
    });

    // checks if subtractTwoNumbers takes 0 from 4 and returns 4
    test('4 minus 0 returns 4', () => {
        expect(subtractTwoNumbers(4, 0)).toBe(4);
    });

    // checks if subtractTwoNumbers takes 5 from 3 and returns -2
    test('3 minus 5 returns -2', () => {
        expect(subtractTwoNumbers(3, 5)).toBe(-2);
    });

    // checks if subtractTwoNumbers takes -6 from -4 and returns 2
    test('-4 minus -6 returns 2', () => {
        expect(subtractTwoNumbers(-4, -6)).toBe(2);
    });
});