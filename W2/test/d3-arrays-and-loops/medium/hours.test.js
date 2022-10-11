const { employee } = require('../../../d3-arrays-and-loops/2-medium/hours');

describe('Employee shift checker', () => {
  it('weeklyHours returns inital [7,6,7,7]', () => {
    expect(employee.weeklyHours).toEqual([7, 6, 7, 7]);
  });
  it('getTotalHours correctly returns 27', () => {
    expect(employee.getTotalHours()).toBe(27);
  });
  it('addShift can add a new shift to weeklyHours', () => {
    expect(employee.addShift(9)).toBe('Shift added.');
    expect(employee.weeklyHours).toEqual([7, 6, 7, 7, 9]);
  });
  it('addShift cannot accept shift that will cause the hours worked to exceed 40', () => {
    expect(employee.addShift(20)).toBe('Shift limit reached.');
  });
  it('addShift cannot add a shift that will create more than 5 shifts.', () => {
    expect(employee.addShift(4)).toBe('Shift limit reached.');
    expect(employee.weeklyHours).toEqual([7, 6, 7, 7, 9]);
  });
});
