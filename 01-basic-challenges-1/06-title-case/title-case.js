// /**
//  * Returns a string with the first letter of each word capitalized.
//  * @param {string} str - The string to capitalize.
//  * @returns {string} - The string with the first letter of each word capitalized.
//  */
// function titleCase(str) {
//   if (!str) {
//     return undefined;
//   }

//   let retVal = '';

//   for (let i = 0; i < str.length; i++) {
//     if (i === 0) {
//       retVal += str[i].toUpperCase();
//     } else if (str[i - 1]  === ' ') {
//       retVal += str[i].toUpperCase();
//     } else {
//       retVal += str[i].toLowerCase();
//     }
//   }

//   return retVal;
// }

/**
 * Returns a string with the first letter of each word capitalized.
 * @param {string} str - The string to capitalize.
 * @returns {string} - The string with the first letter of each word capitalized.
 */
function titleCase(str) {
  if (!str) return undefined;

  return str
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

module.exports = titleCase;
