const consoleSpy = jest.spyOn(console, 'log');
const { fruits, isCarrot, isPineapple } = require('../../../d3-arrays-and-loops/1-easy/arrays');
console.log(fruits);
describe('Fruits array', () => {
  it('has a length of 7', () => {
    expect(fruits.length).toBe(7);
  });
  it('has "orange" as the first element', () => {
    expect(fruits[0]).toBe('orange');
  });
  it('has "raspberry" as the first element', () => {
    expect(fruits[fruits.length - 1]).toBe('raspberry');
  });
  it('has "mango" as the sixth element', () => {
    expect(fruits[5]).toBe('mango');
  });
  it('has an updated 5th element value as "Leeloo Dallas Multipass"', () => {
    expect(fruits[4]).toBe('Leeloo Dallas Multipass');
  });
  it('does not have a value of "banana"', () => {
    const expected = fruits.includes('banana');
    expect(expected).toBe(false);
  });
});
describe('Variables isCarrot and isPineapple', () => {
  it('isCarrot has a value of false', () => {
    expect(isCarrot).toBe(false);
  });
  it('isPineapple has a value of true', () => {
    expect(isPineapple).toBe(true);
  });
});
describe('Console Logs', () => {
  it('logs the index of "grape" as 3', () => {
    expect(consoleSpy).toHaveBeenCalledWith('refined uranium');
  });
  it('logs the 5th element to the console', () => {
    expect(consoleSpy).toHaveBeenCalledWith('refined uranium');
  });
});
