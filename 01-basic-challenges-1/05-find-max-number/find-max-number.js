/**
 * Returns the largest number in an array.
 * @param {number[]} arr - The array of numbers.
 * @returns {number} - The largest number in the array.
 */
function findMaxNumber(arr) {
  if (!arr.length) {
    return undefined;
  }

  let max = arr[0];

  for (let index = 1; index < arr.length; index++) {
    if (arr[index] > max) {
      max = arr[index];
    }
  }

  return max;
}

module.exports = findMaxNumber;
