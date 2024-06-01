/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */

export default class UserTable {
    elem = null;
  
    rowsArr = null;
  
    constructor(rowsArr) {
      this.rowsArr = rowsArr || this.rowsArr;
      this.elem = document.createElement('table');
      this.createTable();
      this.removeRows();
    }
  
    createTable() {
      this.elem.innerHTML =`
          <thead>
              <tr>
                  <th>Имя</th>
                  <th>Возраст</th>
                  <th>Зарплата</th>
                  <th>Город</th>
                  <th></th>
              </tr>
          </thead>
          <tbody>
                ${this.rowsArr.map(arr =>
                  `<tr>
                      <td>${arr.name}</td>
                      <td>${arr.age}</td>
                      <td>${arr.salary}</td>
                      <td>${arr.city}</td>
                      <td><button>X</button></td>
                  </tr>`).join('')}
          </tbody>`
  }

  removeRows() {
    for (let button of this.elem.querySelectorAll("button"))
      button.addEventListener('click', (event) =>
      event.target.closest("tr").remove())
  }
}