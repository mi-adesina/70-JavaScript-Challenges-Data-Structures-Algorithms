/**
 * Returns true if the string is a palindrome.
 * @param {string} str - The string to check.
 * @returns {boolean} - True if the string is a palindrome, false otherwise.
 */
function isPalindrome(str) {
  if (typeof str !== 'string') {
    return undefined;
  }

  const testStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  if (testStr === '') {
    return false;
  }

  for (let i = 0; i < testStr.length / 2; i++) {
    if (testStr[i] != testStr[testStr.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

module.exports = isPalindrome;
