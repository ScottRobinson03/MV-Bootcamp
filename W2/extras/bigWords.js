/**
 * Return an array of words in the input array which are bigger than or equal to
 * the average word length for the array
 * e.g. (['i', 'am', 'soo', 'hungry']) => ['soo', 'hungry']
 * @param {string[]} words
 * @returns {string[]}
 */

function bigWords (words) {
  const avgLength = words.reduce((p, c) => p + c.length, 0) / words.length;
  return words.filter((w) => w.length >= avgLength)
}

module.exports = { bigWords }
