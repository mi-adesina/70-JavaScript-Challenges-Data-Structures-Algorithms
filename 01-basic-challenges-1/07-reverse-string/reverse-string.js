/**
 * Returns the reverse of a string.
 * @param {string} str - The string to reverse.
 * @returns {string} - The reverse of the string.
 */
function reverseString(str) {
  if (typeof str !== 'string') {
    return undefined;
  }

  let reversed = '';

  for (let i = 0; i < str.length; i++) {
    reversed += str[str.length - 1 - i];
  }

  return reversed;
}

module.exports = reverseString;
