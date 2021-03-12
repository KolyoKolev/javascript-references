const testArr = [
  1,
  undefined,
  2,
  'string',
  false,
  1,
  null,
  2,
  3,
  'string',
  true,
  undefined,
  false,
  null,
];

const testArrOfObjects = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 2 },
  { id: 1 },
];

function removeDuplicates(arr) {
  return Array.from(new Set(arr));
}

// remove duplicates from an array of objects using filter
const idSet = new Set();

const removeDuplicatesFromArrayOfObjects = testArrOfObjects.filter((obj) => {
  const existingId = idSet.has(obj.id);
  idSet.add(obj.id);
  return !existingId;
});

// remove duplicates with for loop
function removeDuplicatesWithForLoop(arr1, arr2) {
  let theArrayWhichHoldsTheNoDuplicates = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1) {
      theArrayWhichHoldsTheNoDuplicates.push(arr1[i]);
    }
  }

  for (let j = 0; j < arr2.length; j++) {
    if (arr1.indexOf(arr2[j]) === -1) {
      theArrayWhichHoldsTheNoDuplicates.push(arr2[j]);
    }
  }
}

// for testing if it works call => removeDuplicatesWithForLoop([1, 2, 3, 4], [1, 2, 3, 4, 5]);
