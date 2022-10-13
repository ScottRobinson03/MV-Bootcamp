/**
 * Return true if the arrays contain the same elements in any order, else false
 * e.g. ([1, 2], [1, 2]) => true
 * e.g. ([1, 2], [2, 1]) => true
 * e.g. ([1,2], [2,3]) => false
 * @param {(number|string)[]} arr1 
 * @param {(number|string)[]} arr2
 * @returns {boolean}
 */

function getItemCounts(arr) {
  const counter = {}
  
  for (let item of arr) {
    if (!counter[item]) {
      counter[item] = 0;
    }
    counter[item] += 1;
  }
  return counter
}

function arraySameUnordered (arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false;
  }

  const arr1ItemCounts = getItemCounts(arr1);
  const arr2ItemCounts = getItemCounts(arr2);

  const uniqueArr1Items = Object.keys(arr1ItemCounts);
  if (uniqueArr1Items.length != Object.keys(arr2ItemCounts).length) {
    return false;
  }

  for (let uniqueItem of uniqueArr1Items) {
    const indexOfItemInArr1 = arr1.indexOf(uniqueItem);
    const indexOfItemInArr2 = arr2.indexOf(uniqueItem);
    const differentType = !(indexOfItemInArr1 == indexOfItemInArr2 || Math.min(indexOfItemInArr1, indexOfItemInArr2 >= 0));
    const differentCount = arr1ItemCounts[uniqueItem] !== arr2ItemCounts[uniqueItem];
    
    if (differentType || differentCount) {
      return false;
    }
  }
  return true;
}

module.exports = { arraySameUnordered }
