const testData = [3, 4, 5, 6, 7, 8];

function getFirstNumbersOutOfRange(arr) {
  return [arr[0] - 1, arr[arr.length - 1] + 1];
}

const check = getFirstNumbersOutOfRange(testData);

console.log(check);
