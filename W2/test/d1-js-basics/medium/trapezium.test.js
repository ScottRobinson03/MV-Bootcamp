const { findArea } = require('../../../d1-js-basics/2-medium/trapezium');

describe('Trapezium Checker', () => {
  it('findArea takes base1, base2 and height and returns the area.', () => {
    expect(findArea(5, 3, 10)).toBe(40);
    expect(findArea(5, 3, 0)).toBe('Invalid input');
    expect(findArea(5, -3, 2)).toBe('Invalid input');
  });
});
