/**
 * Returns the number of occurrences of a character in a string.
 * @param {string} str - The string to search.
 * @param {string} char - The character to search for.
 * @returns {number} - The number of occurrences of the character in the string.
 */
function countOccurrences(str, char) {
  let occurrences = 0;

  for (let index = 0; index < str.length; index++) {
    if (str[index] === char) {
      occurrences++;
    }
  }

  return occurrences;
}

module.exports = countOccurrences;
