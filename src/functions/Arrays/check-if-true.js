const testDataOne = [10, 2, 31];
const testDataTwo = ['Brazil', 'Bulgaria', 'Chile', 'Colombia'];

function checkIfTrue(array, test) {
  return array.some(test);
}

checkIfTrue(testDataOne, (num) => num > 31);
checkIfTrue(testDataOne, (num) => num == 31);
checkIfTrue(testDataOne, (num) => num < 0);
checkIfTrue(testDataTwo, (country) => country === 'Bulgaria');
checkIfTrue(testDataTwo, (country) => country === 'China');
