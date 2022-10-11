const { d1EasyNumbers } = require('../../../d1-js-basics/1-easy/numbers');

describe('D1-Easy-Numbers ', () => {
  const consoleSpy = jest.spyOn(console, 'log');
  d1EasyNumbers();
  test('should log value of x as 2', () => {
    expect(consoleSpy).toHaveBeenCalledWith(2);
  });
  test('should log value of y as 5', () => {
    expect(consoleSpy).toHaveBeenCalledWith(5);
  });
  test('should log value of z as 12', () => {
    expect(consoleSpy).toHaveBeenCalledWith(12);
  });
  test('should log double the value of x as 4', () => {
    expect(consoleSpy).toHaveBeenCalledWith(4);
  });
  test('should log triple the value of y as 15', () => {
    expect(consoleSpy).toHaveBeenCalledWith(15);
  });
  test('should log half the value of z as 6', () => {
    expect(consoleSpy).toHaveBeenCalledWith(6);
  });
  test('should log value of x+y+z as 19', () => {
    expect(consoleSpy).toHaveBeenCalledWith(19);
  });
  test('should call the console.log 7 times', () => {
    expect(consoleSpy).toHaveBeenCalledTimes(7);
  });
});
