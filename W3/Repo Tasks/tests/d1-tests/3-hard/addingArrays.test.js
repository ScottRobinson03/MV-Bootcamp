const {addingArrays} = require('../../../d1-tests/3-hard/addingArrays')

// addingArrays takes two arrays of numbers and adds the corresponding elements together.
// example [1,1,1], [2,2,2]  => [3,3,3]
// example [1,2,3,4], [4,3,2,1] => [5,5,5,5]

describe('testing addingArrays.js', () => {
    // Arrays with different lengths should return "Arrays are different lengths."
    test('passing arrays of different length returns an error message', () => {
        expect(addingArrays([1, 2], [1, 2, 3])).toBe("Arrays are different lengths.");
        expect(addingArrays([1, 2, 3], [1, 2])).toBe("Arrays are different lengths.");
    });

    // Arrays with non-numbers should return "Not all elements are numbers."
    test('passing arrays with non-numbers returns an error message', () => {
        expect(addingArrays([1, '2'], [1, 2])).toBe("Not all elements are numbers.");
        expect(addingArrays([1, 2], [1, '2'])).toBe("Not all elements are numbers.");
        expect(addingArrays(['1', '2'], ['1', '2'])).toBe("Not all elements are numbers.");
    });

    // two arrays of numbers and the expected result
    test('passing two arrays of numbers returns the expect result', () => {
        expect(addingArrays([1, 1, 1], [2, 2, 2])).toEqual([3, 3, 3]);
        expect(addingArrays([1, 2, 3, 4], [4, 3, 2, 1])).toEqual([5, 5, 5, 5]);
        expect(addingArrays([3], [4])).toEqual([7]);
    });
});