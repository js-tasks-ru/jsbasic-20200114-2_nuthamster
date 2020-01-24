/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
  let salaryPaid = 0;
  for (let prop in salaries) {
    if (typeof salaries[prop] == 'number') {
      salaryPaid += salaries[prop];
    }
  } return salaryPaid;
}
