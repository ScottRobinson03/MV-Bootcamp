const { cleanUp } = require('../../extras/cleanUp');

describe('Clean Up', () => {
  test('should leave empty arrays alone', () => {
    expect(cleanUp([])).toEqual([]);
  });

  test('should clean up an array', () => {
    expect(cleanUp([1, '2', 'three', false, undefined, null])).toEqual([1, 2, 0, 0]);
  });
});
