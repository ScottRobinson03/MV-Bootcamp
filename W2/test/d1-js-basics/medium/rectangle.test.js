const { isSquare, findArea, findPerimeter } = require('../../../d1-js-basics/2-medium/rectangle');
describe('My rectange checker', () => {
  it('isSquare tests whether width and height can make a square', () => {
    expect(isSquare(2, 2)).toBe(true);
    expect(isSquare(2, 5)).toBe(false);
    expect(isSquare(0, 4)).toBe(false);
  });
  it('findArea returns the area of a rectangle from the width and height', () => {
    expect(findArea(4, 5)).toBe(20);
    expect(findArea(0, 5)).toBe('Invalid inputs');
    expect(findArea(3, -3)).toBe('Invalid inputs');
  });
  it('findPerimeter returns the perimeter of a rectangle from the width and height', () => {
    const spy = jest.spyOn(console, 'log');

    expect(findPerimeter(4, 5)).toBe(18);
    expect(findPerimeter(6, 12)).toBe(36);
    expect(findPerimeter(0, 5)).toBe('Invalid inputs');
    expect(findPerimeter(4, -2)).toBe('Invalid inputs');
    expect(spy).toHaveBeenCalledWith(18);
  });
});
