const { levelUp } = require('../../extras/levelUp')

describe('Level Up', () => {

  test('should calculate correctly', () => {
    expect(levelUp([1, 2, 3])).toBe(8)
  })

  test('should handle zero, negatives and decimals', () => {
    expect(levelUp([1, 0, -5, 1.5])).toBe(-5.5)
  })

})
