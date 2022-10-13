/**
 * Rotate the input array to the left by r and return
 * When r < 0, rotate the other way; when r = 0 do nothing
 * e.g. ([1, 2, 3, 4, 5], 2) => [3, 4, 5, 1, 2]
 * e.g. ([1, 2, 3, 4, 5], -2) => [4, 5, 1, 2, 3]
 * @param {any[]} arr 
 * @param {number} r
 * @returns {any[]}
 */

function rotate (arr, r) {
  const shiftToLeft = r > 0;

  extractor = () => (shiftToLeft ? arr.shift() : arr.pop()) // extract from beginning if shifting left, otherwise the end
  inserter = (x) => (shiftToLeft ? arr.push(x) : arr.unshift(x)) // insert to end if shifting left, otherwise the beginning.

  for (let i = 0; i < Math.abs(r); i++) {
    const item = extractor();
    inserter(item);
  }
  return arr;
}

rotate([1, 2, 3, 4, 5], -1);
module.exports = { rotate }
