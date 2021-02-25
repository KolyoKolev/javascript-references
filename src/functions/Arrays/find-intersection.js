const testArr = ['1, 2, 3, 4, 5', '5, 2, 12, 3, 20'];

function findIntersectionSolutionOne(arr) {
  const [LIST_ONE, LIST_TWO] = arr.map((res) => res.split(', '));
  const MAP_RESULT = {};
  const FINAL_RESULT = [];

  for (let item of LIST_ONE) {
    MAP_RESULT[item] = true;
  }

  for (let item of LIST_TWO) {
    if (MAP_RESULT[item]) {
      FINAL_RESULT.push(item);
    }
  }

  return FINAL_RESULT.length ? FINAL_RESULT.join(', ') : false;
}

function findIntersectionSolutionTwo(arr) {
  const [LIST_ONE, LIST_TWO] = arr.map((res) =>
    res.split(', ').map((res) => parseInt(res))
  );
  const SET_OF_LIST_TWO = new Set(LIST_TWO);
  return LIST_ONE.filter((res) => SET_OF_LIST_TWO.has(res)).join(', ') || false;
}

findIntersectionSolutionOne(testArr);
findIntersectionSolutionTwo(testArr);
