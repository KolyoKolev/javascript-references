const testDataOne = 'fakjehfksjdfsdnf,msdf';

function countChar(str, char) {
  let countedChars = 0;
  const string = String(str);
  for (let i = 0; i < string.length; i++) {
    string[i] === char ? countedChars++ : countedChars;
  }
  return !countedChars
    ? `The chosen ${char} is not present in the given string`
    : `The chosen ${char} is present ${countedChars} times`;
}

countChar(testDataOne, 'k');
countChar(testDataOne, 1);
