const testRed = 240;
const testGreen = 133;
const testBlue = 79;

function rgbToHexadecimal(r, g, b) {
  return `${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
}

const RESULT = rgbToHexadecimal(testRed, testGreen, testBlue);

console.log(RESULT);
