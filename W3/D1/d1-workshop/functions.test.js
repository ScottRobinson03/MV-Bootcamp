const { sum, characters, isEven } = require('./functions');

describe('testing some functions from functions.js', () => {
    test('`sum()` performs addition', () => {
        expect(sum(3, 5)).toBe(8);
        expect(sum(-3, 2)).toBe(-1);
        expect(sum('Hello', 'World')).toBe('HelloWorld');
    });

    test('characters has the correct structure', () => {
        const expectedResponse = {
            "name": "Miguel",
            "age": 40,
            "origin": "Spain"
        };

        const actualCharacter = characters[0];
        expect(Object.keys(actualCharacter)).toEqual(Object.keys(expectedResponse));    
    });
});

describe('testing other functions', () => {
    test('oddOrEven() returns the correct value', () => {
        expect(isEven(3)).toBeFalsy();
        expect(isEven(4)).toBeTruthy();
    })
});