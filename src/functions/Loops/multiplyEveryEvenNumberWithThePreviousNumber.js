const testData = [1, 32, 3, 43, 56, 65, 12, 84, 14];

function multiplyEveryEvenNumberWithThePreviousNumber(arr) {
  let result = 0;

  for (let n = 0; n < arr.length; n++) {
    if (arr[n] % 2 === 0) {
      result += arr[n] * arr[n - 1];
    }
  }

  return result;
}

const check = multiplyEveryEvenNumberWithThePreviousNumber(testData);
console.log(check);
