const testArrOne = [1, 2, 3, 4, 5, 6];
const testArrTwo = [1, 2, 3, 4, 5, 6, 10];

function everyVersionOne(array, test) {
  for (let item of array) {
    if (!test(item)) return false;
  }
  return true;
}

function everyVersionTwo(array, test) {
  return !array.some((item) => !test(item));
}

everyVersionOne(testArrOne, (item) => item < 7);
everyVersionTwo(testArrOne, (item) => item < 7);
everyVersionOne(testArrTwo, (item) => item < 7);
everyVersionTwo(testArrTwo, (item) => item < 7);
