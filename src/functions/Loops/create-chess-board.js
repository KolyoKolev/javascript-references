let size = 8;
let board = '';

for (let x = 0; x < size; x++) {
  for (let y = 0; y < size; y++) {
    if ((x + y) % 2 == 0) {
      board += '#';
    } else {
      board += ' ';
    }
  }
  board += '\n';
}

board;
