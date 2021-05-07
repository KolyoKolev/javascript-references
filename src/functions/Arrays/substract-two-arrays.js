// remove all values from array a which are present in array b
// plus remove the duplicates b in a

const testDataFirst = [1, 2, 3];
const testDataSecond = [1, 2];

function substractTwoArraysSolutionOne(a, b) {
  const result = [];

  if (!b.length) {
    return a;
  } else {
    for (let i of a) {
      if (!b.includes(i)) {
        result.push(i);
      }
    }
  }

  return result;
}

function substractTwoArraysSolutionTwo(a, b) {
  return a.filter((item) => !b.includes(item));
}

const resSolutionOne = substractTwoArraysSolutionOne(
  testDataFirst,
  testDataSecond
);

console.log(resSolutionOne);

const resSolutionTwo = substractTwoArraysSolutionOne(
  testDataFirst,
  testDataSecond
);

console.log(resSolutionTwo);
