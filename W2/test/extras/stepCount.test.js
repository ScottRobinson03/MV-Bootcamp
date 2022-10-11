const { stepCount } = require('../../extras/stepCount')

describe('Step count', () => {

  test('should handle empty arrays', () => {
    expect(stepCount([])).toBe(0)
  })

  test('should correctly count sequences', () => {
    expect(stepCount([2, 5, 9, 7, 1, 3, 4, 6, 1, 0, 1])).toBe(10)
  })

  test('should return 0 for a decreasing sequence', () => {
    expect(stepCount([5, 4, 3, 2, 1])).toBe(0)
  })

})
