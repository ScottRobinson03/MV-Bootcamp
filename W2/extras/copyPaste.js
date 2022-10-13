/**
 * Return an array that contains el n times
 * e.g. (4, 'hi') => ['hi', 'hi', 'hi', 'hi']
 * @param {number} n 
 * @param {any} el 
 * @returns {any[]}
 */

function copyPaste (n, el) {
  return Array(n).fill(el);
}

module.exports = { copyPaste }
