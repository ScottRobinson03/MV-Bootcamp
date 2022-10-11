const { copyPaste } = require('../../extras/copyPaste');

describe('Copy Paste', () => {
  test('should copy and paste', () => {
    expect(copyPaste(5, false)).toEqual([false, false, false, false, false]);
  });

  test('should return empty array when n = 0', () => {
    expect(copyPaste(0, 'foo')).toEqual([]);
  });
});
