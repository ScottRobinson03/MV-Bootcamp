const { targetPractice } = require('../../extras/targetPractice');

describe('Target practice', () => {
  test('should return a pair that adds to sum', () => {
    const arr = [1, 5, 2, 4, 3];
    const target = 7;
    const [i, j] = targetPractice(arr, target);
    expect(arr[i] + arr[j]).toBe(target);
  });

  test('should return false if impossible', () => {
    expect(targetPractice([1, 2, 3], 10)).toBe(false);
  });
});
