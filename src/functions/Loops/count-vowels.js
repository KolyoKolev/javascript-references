const testData1 = 'Lorem Ipsum';
const testData2 = 'Loremipsumorro quisquamestquidolorem ipsumquiadolorsitamet';
const testData3 =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ipsum velit, tincidunt non tempor sit amet, tristique a nibh. Mauris quis ante et ipsum suscipit lobortis quis ac quam. Praesent sem sapien, condimentum in fermentum sed, elementum non odio. Sed et orci vitae purus finibus vehicula. Sed ac vulputate neque';

function countVowelsSolutionOne(str) {
  let vowelsCount = 0;
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let item of str) {
    for (let vowel of vowels) {
      if (item.toLowerCase() === vowel) {
        vowelsCount++;
      }
    }
  }
  return vowelsCount;
}

function countVowelsSolutionTwo(str) {
  return str.match(/[aeiou]/gi || []).length;
}

const firstCheckForSolutionOne = countVowelsSolutionOne(testData1);
const firstCheckForSolutionTwo = countVowelsSolutionTwo(testData1);
const secondCheckForSolutionOne = countVowelsSolutionOne(testData2);
const secondCheckForSolutionTwo = countVowelsSolutionTwo(testData2);
const thirdCheckForSolutionOne = countVowelsSolutionOne(testData3);
const thirdCheckForSolutionTwo = countVowelsSolutionTwo(testData3);

console.log(firstCheckForSolutionOne);
console.log(firstCheckForSolutionTwo);
console.log(secondCheckForSolutionOne);
console.log(secondCheckForSolutionTwo);
console.log(thirdCheckForSolutionOne);
console.log(thirdCheckForSolutionTwo);
