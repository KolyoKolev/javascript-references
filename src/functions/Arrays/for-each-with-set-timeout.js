const animals = ['Aardvark', 'Albatross', 'Alligator', 'Alpaca', 'Ant'];

function logArrayItemEverySecond(arr) {
  arr.forEach((item, i) => {
    setTimeout(() => {
      console.log(item);
    }, i * 1000); // <== the magic is happening here
  });
}

logArrayItemEverySecond(animals);
