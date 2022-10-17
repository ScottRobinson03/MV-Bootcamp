const {divideTwoIntegers} = require('../../../d1-tests/2-medium/divideTwoIntegers')


describe('testing divideTwoIntegers.js', () => {
    // checks if divideTwoIntegers receiving 12 and 3 will return 4
    test('12 divided by 3 returns 4', () => {
        expect(divideTwoIntegers(12, 3)).toBe(4);
    });

    // checks if divideTwoIntegers receiving 12 and -3 will return -4
    test('12 divided by -3 returns -4', () => {
        expect(divideTwoIntegers(12, -3)).toBe(-4);
    });

    // checks if divideTwoIntegers receiving 12 and 0 will return "Divide by zero error."
    test('12 divided by 0 returns an error message', () => {
        expect(divideTwoIntegers(12, 0)).toBe("Divide by zero error.");
    });

    // if divideTwoIntegers is passed a value other than a number, it should return "Inputs must be a number."
    test('passing non-numbers returns an error message', () => {
        expect(divideTwoIntegers('3', 3)).toBe("Inputs must be a number.");
        expect(divideTwoIntegers(3, '3')).toBe("Inputs must be a number.");
        expect(divideTwoIntegers('3', '3')).toBe("Inputs must be a number.");
    });

    // if divideTwoIntegers is passed a decimal value, it should return "Integers only."
    test('passing decimals returns an error message', () => {
        expect(divideTwoIntegers(3.14, 1)).toBe("Integers only.");
        expect(divideTwoIntegers(10, 3.33)).toBe("Integers only.");
        expect(divideTwoIntegers(3.14, 3.14)).toBe("Integers only.");
    });
});