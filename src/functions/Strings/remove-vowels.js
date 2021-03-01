const testString =
  'This is a string for testing if the all vowels will be removed!';

function removeVowels(str) {
  return str.replace(/[aeiouAEIOU]/g, '');
}

removeVowels(testString);
