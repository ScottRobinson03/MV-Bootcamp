/**
 * Coerce each element to a number if possible, otherwise remove the element
 * e.g. ([1, '2', 'three', false, [5]]) => [1, 2, 0]
 * @param {any[]} arr 
 * @returns {any[]}
 */

function cleanUp (arr) {
  const newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (typeof(arr[i]) == 'number') {
      newArr.push(arr[i]);
      continue;
    }
    if (isNaN(+arr[i])) {
      continue
    }
    newArr.push(+arr[i]);
  }
  return newArr
}

module.exports = { cleanUp }
