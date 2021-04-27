function getNumbersInRange(startNum, endNum) {
  let result = [];

  for (let i = startNum + 1; i < endNum; i++) {
    result.push(i);
  }

  return result;
}

console.log(getNumbersInRange(6, 8));
console.log(getNumbersInRange(2, 9));
