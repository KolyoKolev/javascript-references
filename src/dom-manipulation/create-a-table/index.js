(function () {
  const MAIN_DATA = [
    {
      Book: 'Stranger in a Strange Land',
      Author: 'Robert Heinlein',
      Year: 1961,
    },
    {
      Book: 'Journey to the Center of the Earth',
      Author: 'Jules Verne',
      Year: 1864,
    },
    { Book: 'The Invisible Man', Author: 'Herbert George Wells', Year: 1897 },
    { Book: 'A Space Odyssey', Author: 'Arthur C. Clarke', Year: 2001 },
    { Book: 'I, Robot', Author: 'Isaac Asimov', Year: 1950 },
    { Book: 'Dune', Author: 'Frank Herbert', Year: 1965 },
    { Book: 'Fahrenheit 451', Author: 'Ray Bradbury', Year: 1953 },
  ];

  function buildTable(data) {
    let table = document.createElement('table');
    let tableHead = table.appendChild(document.createElement('thead'));
    let tableBody = table.appendChild(document.createElement('tbody'));
    let fields = Object.keys(data[0]);
    let headRow = document.createElement('tr');
    fields.forEach((field) => {
      let headCell = document.createElement('th');
      headCell.appendChild(document.createTextNode(field));
      headRow.appendChild(headCell);
    });
    tableHead.appendChild(headRow);

    data.forEach((object) => {
      let row = document.createElement('tr');
      fields.forEach((field) => {
        let cell = document.createElement('td');
        cell.appendChild(document.createTextNode(object[field]));
        row.appendChild(cell);
      });
      tableBody.appendChild(row);
    });
    return table;
  }

  document.querySelector('#main-container').appendChild(buildTable(MAIN_DATA));
})();
