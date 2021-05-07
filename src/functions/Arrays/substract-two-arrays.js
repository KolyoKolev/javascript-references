// remove all values from array a which are present in array b
// plus remove the duplicates b in a

const testDataFirst = [1, 2, 3];
const testDataSecond = [1, 2];

function substractTwoArrays(a, b) {
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

const res = substractTwoArrays(testDataFirst, testDataSecond);
console.log(res);
