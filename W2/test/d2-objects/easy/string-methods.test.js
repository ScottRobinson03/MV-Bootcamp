const { launchCodeCheck, sayItLoudly, indoorVoice } = require('../../../d2-objects/1-easy/string-methods');

describe('Launch code Check', () => {
  it('checks the length of Launch code is not shorter than 8', () => {
    expect(launchCodeCheck('abcdefgh')).toBe('Launch code is long enough.');
    expect(launchCodeCheck('isthislongenough')).toBe('Launch code is long enough.');
    expect(launchCodeCheck('abcdefg')).toBe('Launch code is too short.');
    expect(launchCodeCheck('short')).toBe('Launch code is too short.');
  });
});

describe('SayItLoudly', () => {
  it('returns a string in all-caps', () => {
    expect(sayItLoudly('hello')).toContain('HELLO');
    expect(sayItLoudly('gOoD MoRnIng')).toContain('GOOD MORNING');
  });
  it('adds an "!" to the end of the string', () => {
    expect(sayItLoudly('hello')[5]).toBe('!');
    expect(sayItLoudly('gOoD MoRnIng')[12]).toBe('!');
  });
});

describe('indoorVoice', () => {
  it('returns a string in all lowercase', () => {
    expect(indoorVoice('HI EVERYONE')).toBe('hi everyone');
  });
  it('returns "shhhh" if the string includes a "!"', () => {
    expect(indoorVoice('OH YEAH!')).toBe('shhhh');
  });
});
