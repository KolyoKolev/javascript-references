function reverseNumber(num) {
  let reversedNum = [];
  const convertedNumToString = num.toString().split('');

  for (let i = convertedNumToString.length - 1; i >= 0; i--) {
    reversedNum.push(convertedNumToString[i]);
  }

  const result = reversedNum.join('');
  return result;
}

const firstCheck = reverseNumber(12345);
const secondCheck = reverseNumber(54321);

console.log(firstCheck);
console.log(secondCheck);
