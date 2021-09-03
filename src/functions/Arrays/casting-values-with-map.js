const testArr = ['12', '-21', [13], '31.14'];

const castedNums = (array) => {
  return array.map(Number);
};

console.log(castedNums(testArr));
