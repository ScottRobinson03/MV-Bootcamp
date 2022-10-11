const { d1EasyStrings } = require('../../../d1-js-basics/1-easy/strings');

describe('Strings ', () => {
  const consoleSpy = jest.spyOn(console, 'log');
  d1EasyStrings();
  test('should log "Knock Knock" to the console', () => {
    expect(consoleSpy).toHaveBeenCalledWith('Knock Knock.');
  });
  test(`should log "Who's there" to the console`, () => {
    expect(consoleSpy).toHaveBeenCalledWith("Who's there?");
  });
  test(`should log "The." to the console`, () => {
    expect(consoleSpy).toHaveBeenCalledWith('The.');
  });
  test(`should log "The Who?" to the console`, () => {
    expect(consoleSpy).toHaveBeenCalledWith('The Who?');
  });
  test(`should log "Yeeeaaahhh!!!" to the console`, () => {
    expect(consoleSpy).toHaveBeenCalledWith('Yeeeaaahhh!!!');
  });
  test('should call the console.log 5 times', () => {
    expect(consoleSpy).toHaveBeenCalledTimes(5);
  });
});
