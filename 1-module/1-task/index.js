/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {

	let result = 1;

  if (n===0) {
	  return result}; //исключение для n=0

	if (n===1){
	  return result}; //исключение для n=1

	for (let i=1; i<=n; i++) {
	  result = result * i;
	}
	return result;

}
