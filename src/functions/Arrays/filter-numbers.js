const testArr = [1, 2, 0.5, 'a', 'b'];

// Version one
function filterNumbersVersionOne(arr) {
  return arr.filter((item) => typeof item === 'number');
}

// version two
function filterNumbersVersionTwo(arr) {
  let filteredArray = [];
  for (let item of arr) {
    typeof item == 'number' ? filteredArray.push(item) : null;
  }
  return filteredArray;
}

filterNumbersVersionOne(testArr);
filterNumbersVersionTwo(testArr);
