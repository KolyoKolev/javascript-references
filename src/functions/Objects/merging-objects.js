const objA = {
  objAKey1: 'Hello',
  objAKey2: 'There',
};

const objB = {
  objBKey1: 'This is',
  objBKey2: 'Amazing',
};

const result1 = { objA, objB };
console.log(result1);
// expected outcome:
// {
//     objA: { objAKey1: 'Hello', objAKey2: 'There' },
//     objB: { objBKey1: 'This is', objBKey2: 'Amazing' }
// }

const result2 = { ...objA, objB };
console.log(result2);
// expected outcome:
// {
//     objAKey1: 'Hello',
//     objAKey2: 'There',
//     objB: { objBKey1: 'This is', objBKey2: 'Amazing' }
// }

const result3 = { ...objA, ...objB };
console.log(result3);

// expected outcome:
// {
//     objAKey1: 'Hello',
//     objAKey2: 'There',
//     objBKey1: 'This is',
//     objBKey2: 'Amazing'
// }
