function factorial(n) {
  return n === 1 ? 1 : n * factorial(n - 1);
}

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
