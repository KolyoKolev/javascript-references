// Simple array
const doors = ['red', 'green', 'red'];

// Console log all match posible combination with map
const doorAndCoinsPossibilitiesWithMap = doors.map((door) => {
  return [door + ' heads', door + ' tails'];
});

console.log(doorAndCoinsPossibilitiesWithMap);

// expected outcome is array of arrays:
// [
//     [ 'red heads', 'red tails' ],
//     [ 'green heads', 'green tails' ],
//     [ 'red heads', 'red tails' ]
//   ]

const doorAndCoinsPossibilitiesWithFlatMap = doors.flatMap((door) => {
  return [door + ' heads', door + ' tails'];
});

console.log(doorAndCoinsPossibilitiesWithFlatMap);

// expected outcome is a single array with all values:
// [
//     'red heads',
//     'red tails',
//     'green heads',
//     'green tails',
//     'red heads',
//     'red tails'
//   ]
