/**
 * Returns the number of vowels in a string.
 * @param {string} str - The string to search.
 * @returns {number} - The number of vowels in the string.
 */
function countVowels(str) {
  if (typeof str !== 'string') {
    return undefined;
  }

  const vowels = 'aeiou';
  const formattedStr = str.toLowerCase();
  let vowelCounts = 0;

  for (let i = 0; i < formattedStr.length; i++) {
    if (vowels.includes(formattedStr[i])) {
      vowelCounts++;
    }
  }

  return vowelCounts;
}

module.exports = countVowels;
