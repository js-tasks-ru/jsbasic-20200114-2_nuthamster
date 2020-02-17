/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */

'use strict';

function highlight(table) {

  for (let tr of table.querySelector('tbody').rows) {

    if (!tr.hasAttribute('hidden')) {
      tr.setAttribute('hidden', '');
    }

    if (tr.cells[1].innerHTML < 18) {
      tr.setAttribute('style', 'text-decoration: line-through');
    }

    if (tr.cells[2].innerHTML === 'm') {
      tr.classList.add('male');
    } else {
      tr.classList.add('female');
    }

    if (tr.cells[3].dataset.available === 'true') {
      tr.classList.add('available');
    } else if (tr.cells[3].dataset.available === 'false') {
      tr.classList.add('unavailable');
    }
  }
}
