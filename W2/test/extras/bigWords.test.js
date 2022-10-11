const { bigWords } = require('../../extras/bigWords');

describe('Big Words', () => {
  test('should remove words bigger than or equal to average', () => {
    expect(bigWords(['i', 'am', 'soo', 'hungry'])).toEqual(['soo', 'hungry']);
  });

  test('should return all instances', () => {
    expect(bigWords(['foo', 'bar', 'baz'])).toEqual(['foo', 'bar', 'baz']);
  });

  test('should work when the average is decimal', () => {
    expect(bigWords(['i', 'own', 'cheese'])).toEqual(['cheese']);
  });
});
