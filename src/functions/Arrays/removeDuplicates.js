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
