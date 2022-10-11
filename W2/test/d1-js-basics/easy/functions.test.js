const { outsideVoice, addThreeTripled } = require('../../../d1-js-basics/1-easy/functions');

describe('outsideVoice', () => {
  it('adds three exclaimation marks to a given string', () => {
    consoleSpy = jest.spyOn(console, 'log');
    outsideVoice('Hello');
    outsideVoice('Glad to be here');
    outsideVoice('');
    expect(consoleSpy).toBeCalledWith('Hello!!!');
    expect(consoleSpy).toBeCalledWith('Glad to be here!!!');
    expect(consoleSpy).toBeCalledWith('!!!');
  });
});
describe('', () => {
  consoleSpy = jest.spyOn(console, 'log');
  addThreeTripled(1, 4, 7);
  addThreeTripled(1, 3, 0);
  addThreeTripled(10, -5, 6);
  it('adds three numbers together and then triples the result', () => {
    expect(consoleSpy).toBeCalledWith(36);
    expect(consoleSpy).toBeCalledWith(33);
  });
});
