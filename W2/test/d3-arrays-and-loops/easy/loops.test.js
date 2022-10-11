const { task1, task2, task3 } = require('../../../d3-arrays-and-loops/1-easy/loops');

describe('task1', () => {
  it('task1 array contains the numbers 0 through 10 in ascending order', () => {
    expect(task1).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(task1.length).toBe(11);
  });
});
describe('task2', () => {
  it('task2 array contains the numbers 10 through 0 in descending order', () => {
    expect(task2).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
    expect(task2.length).toBe(11);
  });
});
describe('task3', () => {
  it('task3 array contains the even numbers from 1 to 20 in ascending order', () => {
    expect(task3).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
    expect(task3.length).toBe(10);
  });
});
