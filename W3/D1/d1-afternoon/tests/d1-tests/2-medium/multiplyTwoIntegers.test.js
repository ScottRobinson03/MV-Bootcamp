const {multiplyTwoIntegers} = require('../../../d1-tests/2-medium/multiplyTwoIntegers')


describe('testing multiplyTwoIntegers.js', () => {
    // checks if multiplyTwoIntegers multiplies 3 and 4 and returns 12
    test('3 times 4 returns 12', () => {
        expect(multiplyTwoIntegers(3, 4)).toBe(12);
    });

    // checks if multiplyTwoIntegers multiplies 0 and 3 and returns 0
    test('0 times 3 returns 0', () => {
        expect(multiplyTwoIntegers(0, 3)).toBe(0);
    });

    // checks if multiplyTwoIntegers multiplies 5 and -6 and returns -30
    test('5 times -6 returns -30', () => {
        expect(multiplyTwoIntegers(5, -6)).toBe(-30);
    });

    // checks if multiplyTwoIntegers multiplies -6 and -4 and returns 24
    test('-6 times -4 returns 24', () => {
        expect(multiplyTwoIntegers(-6, -4)).toBe(24);
    });

    // if multiplyTwoIntegers is passed a value other than a number, it should return "Inputs must be a number."
    test('passing a non-number returns an error message', () => {
        expect(multiplyTwoIntegers('3', 3)).toBe('Inputs must be a number.');
        expect(multiplyTwoIntegers(3, '3')).toBe('Inputs must be a number.');
        expect(multiplyTwoIntegers('3', '3')).toBe('Inputs must be a number.');
    });

    // if multiplyTwoIntegers is passed a decimal value, it should return "Integers only."
    test('passing decimals returns an error message.', () => {
        expect(multiplyTwoIntegers(3.14, 3)).toBe("Integers only.");
        expect(multiplyTwoIntegers(3, 3.14)).toBe("Integers only.");
        expect(multiplyTwoIntegers(3.14, 3.14)).toBe("Integers only.");
    });
});