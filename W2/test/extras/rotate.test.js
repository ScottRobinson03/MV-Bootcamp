const { rotate } = require('../../extras/rotate');

describe('Rotate', () => {
  test('should leave an empty array alone', () => {
    expect(rotate([], 1)).toEqual([]);
  });

  test('should rotate to the left when r > 0', () => {
    expect(rotate([1, 2, 3, 4, 5], 3)).toEqual([4, 5, 1, 2, 3]);
  });

  test('should rotate to the right when r < 0', () => {
    expect(rotate([1, 2, 3, 4, 5], -3)).toEqual([3, 4, 5, 1, 2]);
  });

  test('should do nothing when r = 0', () => {
    expect(rotate([1, 2, 3, 4, 5], 0)).toEqual([1, 2, 3, 4, 5]);
  });
});
