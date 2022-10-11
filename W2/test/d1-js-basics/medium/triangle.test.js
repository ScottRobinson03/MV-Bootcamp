const { isTriangle, findPerimeter } = require('../../../d1-js-basics/2-medium/triangle');

describe('My Triangle Checker', () => {
  it('findPerimeter returns the perimeter of a triangle given the length of three sides.', () => {
    expect(findPerimeter(3, 4, 5)).toBe(12);
    expect(findPerimeter(4, 6, 8)).toBe(18);
    expect(findPerimeter(1, 2, 0)).toBe('Invalid Input');
    expect(findPerimeter(3, 4, 9)).toBe('Invalid Input');
  });
  it('isTriangle checks if three lengths can form a triangle.', () => {
    expect(isTriangle(1, 2, 0)).toBe(false);
    expect(isTriangle(3, 4, 9)).toBe(false);
    expect(isTriangle(3, 4, 5)).toBe(true);
    expect(isTriangle(4, 6, 8)).toBe(true);
  });
});
