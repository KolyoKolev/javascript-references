const stringForReversing = 'String to be reversed';

function reverseString(str) {
  const reversedString = [];
  const tempSplitedString = str.split('');

  for (let i = tempSplitedString.length - 1; i >= 0; i--) {
    reversedString.push(tempSplitedString[i]);
  }

  const finalResult = reversedString.join('');

  return finalResult;
}

const check = reverseString(stringForReversing);
console.log(check);
