const { fizzBuzz } = require('../../../d1-js-basics/2-medium/fizzBuzz');

describe('Fizzbuzz', () => {
  it('6 will return "FIZZ"', () => {
    expect(fizzBuzz(6)).toBe('FIZZ');
  });
  it('10 will return "BUZZ"', () => {
    expect(fizzBuzz(10)).toBe('BUZZ');
  });
  it('30 will return "FIZZBUZZ"', () => {
    expect(fizzBuzz(30)).toBe('FIZZBUZZ');
  });
  it('29 will return 29', () => {
    expect(fizzBuzz(29)).toBe(29);
  });
});
