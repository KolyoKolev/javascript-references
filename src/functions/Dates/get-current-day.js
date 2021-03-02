function getCurrentDay() {
  const DATE = new Date();
  const DAY = DATE.getDay();
  const DAY_LIST = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday ',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  return `The current day is ${DAY_LIST[DAY]}`;
}

getCurrentDay();
