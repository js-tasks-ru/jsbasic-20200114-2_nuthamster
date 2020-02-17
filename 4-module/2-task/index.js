/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
'use strict';

function makeDiagonalRed(table) {
  let i = 0;

  for (let tr of table.querySelector('tbody').rows) {
    
    tr.cells[i].style.backgroundColor = 'red';

    i++;
  }

  return table;
}
