function getRandomNumberInRange(max = 1, min = 0) {
  return min >= max ? max : Math.floor(Math.random() * (max - min) + min);
}

setInterval(() => {
  console.log(getRandomNumberInRange(2e10, 1));
}, 500);
