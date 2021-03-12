const testData = [
  ['meal one', 500],
  ['meal two', 200],
  ['meal three', 1500],
];

function countPercentageOfCaloriesPerMeal(array) {
  const totalCalories = array.reduce((acc, current) => acc + current[1], 0);

  array.forEach((meal) => {
    let percentage = ((meal[1] / totalCalories) * 100).toFixed();
    meal[2] = `${percentage}%`;
  });

  return array;
}

countPercentageOfCaloriesPerMeal(testData);

// nice way the result to be seen in the terminal:
// console.table(countPercentageOfCaloriesPerMeal(testData));
