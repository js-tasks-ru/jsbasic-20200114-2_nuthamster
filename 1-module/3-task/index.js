/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  if (!str) return str; //для пустой строки
  
  return str[0].toUpperCase() + str.slice(1) 
}
