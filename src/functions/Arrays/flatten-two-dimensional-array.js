const testArray = [
  ['Value one', 1],
  ['Value two', 2],
  ['Value three', 3],
  ['Value four', 4],
  ['Value five', 5],
];

function flattenTwoDimensionalArray(array) {
  return array.reduce((acc, current) => acc.concat(current), []);
}

flattenTwoDimensionalArray(testArray);
