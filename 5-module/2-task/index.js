/**
 * Компонент, который реализует сортируемую таблицу
 * @param {Array} items - данные, которые нужно отобразить
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },
 *
 * @constructor
 */
function SortableTable(items) {
  /**
   * @property {Element} - обязательно свойство, которое ссылается на элемент <table>
   */
  this.el = document.createElement('table');

  this.items = items;

  let _itemKeys = [];

  if (items.length > 0) {
    for (let key in items[0]) {
      _itemKeys.push(key);
    }
  }

  this.columnNames = ['Age', 'Name', 'Salary', 'City'];

  this.render = () => {
    let innerHTML = "";
    
    innerHTML += '<thead><tr>';
    for (let columnName of this.columnNames) {
      innerHTML += `<td>${columnName}</td>`;
    }
    innerHTML += '</thead></tr>';

    innerHTML += '<tbody>';
    for (let item of this.items) {
      innerHTML += `<tr><td>${item.name}</td><td>${item.age}</td><td>${item.salary}</td><td>${item.city}</td></tr>`;
    }
    innerHTML += '</tbody>';

    this.el.innerHTML = innerHTML;
  };

  this.sort = (column, desc = false) => {
    this.items.sort((a, b) => {
      let key = _itemKeys[column];
      let x = a[key];
      let y = b[key];

      if (!desc) {
        if (x > y) return 1;
        if (x == y) return 0;
        if (x < y) return -1;
      } else {
        if (x < y) return 1;
        if (x == y) return 0;
        if (x > y) return -1;
      }
    });

    this.render();
  };

  this.render();  
}
