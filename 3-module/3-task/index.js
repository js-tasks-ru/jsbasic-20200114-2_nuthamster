/**
 * @param {string} str
 * @returns {string}
 */
  function camelize(str) {
    let newStr = []
    newStr = str.split('-').map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join('');
    return newStr;
  }
