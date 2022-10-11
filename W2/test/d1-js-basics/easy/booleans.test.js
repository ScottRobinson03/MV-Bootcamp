const { d1EasyBooleans } = require('../../../d1-js-basics/1-easy/booleans');
describe('"isDarkMode"', () => {
  const consoleSpy = jest.spyOn(console, 'log');
  d1EasyBooleans();
  it('value is logged both as true and false in the console', () => {
    expect(consoleSpy).toHaveBeenCalledWith(true);
    expect(consoleSpy).toHaveBeenCalledWith(false);
  });
  it('should have two calls to console.log', () => {
    expect(consoleSpy).toHaveBeenCalledTimes(2);
  });
});
