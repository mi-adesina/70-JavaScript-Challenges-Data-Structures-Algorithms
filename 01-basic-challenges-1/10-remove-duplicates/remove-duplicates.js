/**
 * Returns a new array with duplicates removed.
 * @param {any[]} arr - The array to remove duplicates from.
 * @returns {any[]} - The new array with duplicates removed.
 */
function removeDuplicates(arr) {
  if (!Array.isArray(arr)) {
    return undefined;
  }
  
  return [...new Set(arr)];
}

module.exports = removeDuplicates;
