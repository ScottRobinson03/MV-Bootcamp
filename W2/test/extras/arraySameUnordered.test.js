const { arraySameUnordered } = require('../../extras/arraySameUnordered')

describe('Array same unordered', () => {

  test('should work on empty arrays', () => {
    expect(arraySameUnordered([], [])).toBe(true)
  })

  test('should care about types', () => {
    expect(arraySameUnordered(['1'], [1])).toBe(false)
  })

  test('should return true if same ordered', () => {
    expect(arraySameUnordered([1, 2, 3], [1, 2, 3])).toBe(true)
  })

  test('should return true if same but unordered', () => {
    expect(arraySameUnordered([2, 1, 2], [1, 2, 2])).toBe(true)
  })

  test('should return false if not same', () => {
    expect(arraySameUnordered([1, 2, 4], [1, 2, 3])).toBe(false)
  })

  test('should be careful of duplicates', () => {
    expect(arraySameUnordered([1, 2, 2], [1, 1, 2])).toBe(false)
  })

})
