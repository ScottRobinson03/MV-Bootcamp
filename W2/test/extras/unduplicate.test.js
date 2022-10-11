const { unduplicate } = require('../../extras/unduplicate');

describe('Unduplicate', () => {
  test('should remove duplicates', () => {
    expect(unduplicate([1, 2, 2, 3])).toEqual([1, 2, 3]);
  });

  test('should not remove different types', () => {
    expect(unduplicate([1, 2, '2', 3])).toEqual([1, 2, '2', 3]);
  });
});
