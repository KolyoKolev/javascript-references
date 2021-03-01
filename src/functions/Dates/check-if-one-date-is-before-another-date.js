const firstDate = new Date(2000, 11, 0);
const secondDate = new Date(2960, 11, 0);

function checkIfOneDateIsBeforeAnotherDate(dateOne, dateTwo) {
  return dateOne - dateTwo < 0
    ? `${dateOne} is before`
    : `${dateTwo} is before`;
}

checkIfOneDateIsBeforeAnotherDate(firstDate, secondDate);
