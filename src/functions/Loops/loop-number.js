function loopNumber(start, test, update, body) {
  for (let value = start; test(value); value = update(value)) {
    body(value);
  }
}

loopNumber(
  10,
  (item) => item > 0,
  (item) => item - 1,
  console.log
);
