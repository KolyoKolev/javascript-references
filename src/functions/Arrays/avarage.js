const testArrayOne = [1, 2, 3, 4];
const testArrayTwo = [1.5, 2.6, 3.7, 4.8];

function avarage(array) {
  return array.reduce((a, b) => (a + b) / array.length);
}

avarage(testArrayOne);
avarage(testArrayTwo);
