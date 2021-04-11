// function which mask all of the chars in a string
// instead of the last 4

function maskifySolutionOne(cc) {
  const splittedStr = cc.split('');
  for (let i = 0; i < splittedStr.length - 4; i++) {
    splittedStr[i] = '#';
  }

  return splittedStr.join('');
}

function maskifySolutionTwo(cc) {
  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}

const test1MaskifySolutionOne = maskifySolutionOne('16');
const test2MaskifySolutionOne = maskifySolutionOne('961380');
const test1MaskifySolutionTwo = maskifySolutionTwo('16');
const test2MaskifySolutionTwo = maskifySolutionTwo('16472376863587');

console.log(test1MaskifySolutionOne);
console.log(test2MaskifySolutionOne);
console.log(test1MaskifySolutionTwo);
console.log(test2MaskifySolutionTwo);
